import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { IonTabs } from '@ionic/angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Tabs } from '@enums/global.enum';
import { NetworkService } from '@services/network.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    TranslateModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @ViewChild('mainTabs') mainTabs!: IonTabs;

  public tabs = Tabs;
  public activeTabName: Tabs = Tabs.HOME;
  public environment = environment;
  
  constructor(
    private readonly networkSrv: NetworkService,
    private translateSrv: TranslateService,
    private toastController: ToastController,
  ) {}

  async ngAfterViewInit(): Promise<void> {
    this.initNetworkService();
    this.hackRedirection();
  }

  public clickScanButton(): void {
    this.mainTabs.select(Tabs.SCAN);
  }

  public clickCloseScanButton(): void {
    this.mainTabs.select(Tabs.HOME);
  }

  private initNetworkService(): void {
    this.networkSrv.init$.subscribe(async (event: any) => {
      if (event?.detail?.response?.connectionType === 'none') {
        const toast = await this.toastController.create({
          message: this.translateSrv.instant('GLOBAL.NETWORK_ERROR'),
          position: 'top',
          positionAnchor: 'header',
          swipeGesture: 'vertical',
          icon: 'globe',
          duration: 5500,
          color: 'danger',
          buttons: [
            {
              side: 'end',
              text: this.translateSrv.instant('GLOBAL.DISMISS'),
              role: 'cancel',
            }
          ],
          cssClass: 'toast-error'
        });
    
        await toast.present();
      }
    });

    this.networkSrv.init();
  }

  private hackRedirection(): void {
    setTimeout(() => {
      this.mainTabs.select(Tabs.REDIRECT);
      setTimeout(() => {
        this.mainTabs.select(Tabs.HOME);
      }, 0);
    }, 500);
  }
}
