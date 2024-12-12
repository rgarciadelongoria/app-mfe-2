import { Injectable, NgZone } from '@angular/core';
import { ShellEvents } from '@enums/shell.enum';
import { Subject } from 'rxjs';

const ON_CHANGE_DELAY = 1000;

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private initSubject = new Subject<void>();
  public init$ = this.initSubject.asObservable();
  private latestEvent: any;

  constructor(
    private ngZone: NgZone
  ) {}

  public init(): void {
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_NETWORK_REMOVE_LISTENERS));
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_NETWORK_ON_CHANGE));
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener(ShellEvents.SHELL_NETWORK_ON_CHANGE_RESPONSE, (event: any) => {
        this.ngZone.run(() => {
          if (event?.detail?.response?.connectionType !== this.latestEvent?.detail?.response?.connectionType) {
            this.latestEvent = event;
            this.initSubject.next(event);
          }
        });
      });
    });
  }
}