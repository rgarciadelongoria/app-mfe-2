import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellEvents } from '@enums/shell.enum';
import { TranslateModule } from '@ngx-translate/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { environment } from '@environments/environment';
import { LocalStorageKeys, Tabs } from '@enums/global.enum';
import { StorageService } from '@services/storage.service';
import { CoreService } from '@services/core.service';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    TranslateModule,
    ZXingScannerModule,
],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScanComponent {
  @HostListener(`window:${ShellEvents.SHELL_SCANNER_RESPONSE}`, ['$event'])
  async handleShellScannerResponse(event: any) {
    await this.onScannerResponse(event.detail?.response || {});
  }

  @HostListener(`window:${ShellEvents.SHELL_SCANNER_ERROR}`, ['$event'])
  async handleShellScannerError(event: any) {
    await this.onScannerError(event.detail?.response || {});
  }

  public hasShell = false;
  public responses: any[] = [];
  public hasPermission = true;
  public allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX
  ];
  public environment = environment;
  
  private backgroundColor = '';
  public tabs = Tabs;
  
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly storageSrv: StorageService,
    private readonly coreSrv: CoreService,
    private router: Router,
  ) {}

  async ionViewDidEnter(): Promise<void> {
    this.cdr.detectChanges();
    document.body.style.backgroundColor = "transparent";
    await this.startScan();
  }

  ionViewWillLeave(): void {
    document.body.style.backgroundColor = this.backgroundColor;
    this.stopScan();
  }

  public async startScan(event?: any): Promise<void> {
    this.hasPermission = true;
    this.cdr.detectChanges();
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_SCANNER_START));
  }
  public stopScan(event?: any): void {
    this.cdr.detectChanges();
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_SCANNER_STOP));
  }

  public permissionResponse(event: any): void {
    this.hasPermission = event || false;
  }

  public async tapResult(): Promise<void> {
    await this.startScan();
  }

  private async onScannerResponse(response: any): Promise<void> {
    console.log('onScannerResponse', response);
    const responseValue = response.displayValue || '';
    if (response && !response.closed) {  
      this.coreSrv.vibration();
      this.addScanData(responseValue);
      alert(responseValue);
    }
    this.cdr.detectChanges();
    this.router.navigateByUrl('/main/home');
  }

  private async onScannerError(response: any): Promise<void> {
    this.hasPermission = false;
  }

  private addScanData(response: any): void {
    const scanData = this.storageSrv.getItem(LocalStorageKeys.SCAN_DATA) || [];
    scanData.push("APP 2: " + response);
    this.storageSrv.setItem(LocalStorageKeys.SCAN_DATA, JSON.stringify(scanData));
  }
}
