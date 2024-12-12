import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { StorageService } from '@services/storage.service';
import { LocalStorageKeys } from '@enums/global.enum';
import { CoreService } from '@services/core.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    TranslateModule,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public scanData = [];

  constructor(
    private readonly storageSrv: StorageService,
    private readonly coreSrv: CoreService,
    private translateSrv: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ionViewDidEnter(): void {
    this.loadScanData();
  }

  public removeData(index: number): void {
    this.scanData.splice(index, 1);
    this.storageSrv.setItem(LocalStorageKeys.SCAN_DATA, JSON.stringify(this.scanData));
    this.loadScanData();
  }

  public changeRemoteFederationConfig(): void {
    this.coreSrv.vibration(1000);
    setTimeout(() => {
      let remoteFederationConfigName = prompt(this.translateSrv.instant('CONFIG.ENTER_REMOTE_CONFIG'), this.storageSrv.getItem(LocalStorageKeys.REMOTE_FEDERATION_CONFIG) || '');
      if (remoteFederationConfigName === null) {
        return;
      }
      if (!!remoteFederationConfigName && typeof remoteFederationConfigName === 'string') {
        this.storageSrv.setItem(LocalStorageKeys.REMOTE_FEDERATION_CONFIG, remoteFederationConfigName);
      } else{
        this.storageSrv.removeItem(LocalStorageKeys.REMOTE_FEDERATION_CONFIG);
      }
      alert(this.translateSrv.instant('CONFIG.RESTART_APP'));
      this.storageSrv.getItem(LocalStorageKeys.REMOTE_FEDERATION_CONFIG) || '';
    }, 1200);
  }

  private loadScanData(): void {
    this.scanData = [];
    this.scanData = this.storageSrv.getItem(LocalStorageKeys.SCAN_DATA) || [];
    console.log(this.scanData);
    this.cdr.detectChanges();
  }
}
