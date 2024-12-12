import { Injectable, NgZone } from '@angular/core';
import { StorageService } from './storage.service';
import { ShellActions, ShellEvents } from '@enums/shell.enum';
import { LocalStorageKeys } from '../enums/global.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public configSubject = new Subject<void>();
  public config$ = this.configSubject.asObservable();

  public currentPlatform = '';

  constructor(
    private readonly storageSrv: StorageService,
    private ngZone: NgZone
  ) {}

  public hasShell(): boolean {
    const remoteVersion = '0.0.0';
    const shellVersion = this.storageSrv.getItem(ShellActions.SHELL_VERSION);
    if (shellVersion === remoteVersion) {
      return true;
    }
    return false;
  }

  public vibration(duration?: number): void {
    const vibrationsEnabled = this.storageSrv.getItem(LocalStorageKeys.VIBRATIONS);
    if (vibrationsEnabled) {
      window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_VIBRATION, {
        detail: {
          duration: duration || 100
        }
      }));
    }
  }
}