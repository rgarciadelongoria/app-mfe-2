import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '@services/storage.service';
import { ShellErrors, ShellEvents } from '@enums/shell.enum';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomTranslateLoader } from '@utils/custom-translate-loader';
import { Languages, LocalStorageKeys } from '@enums/global.enum';
import { CoreService } from '@services/core.service';

@Component({
  selector: 'app-remote-app',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    HttpClientModule,
  ],
  providers: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          deps: [HttpClient]
      }
    }).providers!
  ],
  templateUrl: './remote-app.component.html',
  styleUrl: './remote-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RemoteAppComponent implements OnInit {
  
  constructor(
    private translateSrv: TranslateService,
    private readonly storageSrv: StorageService,
    private readonly coreSrv: CoreService,
  ) {
    this.translateSrv.setDefaultLang('en');
    this.translateSrv.use('en');
  }

  async ngOnInit(): Promise<void> {
    // Change statusbar style
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_STATUSBAR_SET_STYLE, {
      detail: {
        style: 'LIGHT'
      }
    }));
    // Change statusbar background color
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_STATUSBAR_SET_BACKGROUND_COLOR, {
      detail: {
        color: '#ffffff'
      }
    }));
    // Set no error loading remote
    this.setNoErrorLoadingRemote();
    // Import external styles and scripts for shell
    this.importStyles();
    this.importScripts();
    // Init uuid and register device logic
    this.loadLanguage();
    this.initFirstConfig();
  }

  async ngAfterViewInit() {
    // Remove loading screen form shell
    const hasShell = this.coreSrv.hasShell();
    if (hasShell) {
      try {
        document.getElementById("screenBeforeLoadingRemote")!.remove();
      } catch (error) {
        console.error('Error removing loading screen');
      }
    }
  }

  /*
  App Logic
  */
  private loadLanguage() {
    const lang = this.storageSrv.getItem(LocalStorageKeys.LANGUAGE) || Languages.EN;
    this.translateSrv.use(lang);
  }

  private initFirstConfig() {
    // Vibration
    const config = this.storageSrv.getItem(LocalStorageKeys.VIBRATIONS);
    if (config === null) {
      this.storageSrv.setItem(LocalStorageKeys.VIBRATIONS, true);
    }
  }

  /*
  Shell logic
  */

  private setNoErrorLoadingRemote() {
    this.storageSrv.setItem(ShellErrors.SHELL_LOADING_REMOTE_OK, "true");
  }

  private importScripts() {
    const scripts = [
      'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js',
      'https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js'
    ]

    const head = document.head;

    scripts.forEach(script => {
      const scriptEl = document.createElement('script');
      scriptEl.type = 'module';
      scriptEl.src = script;
      scriptEl.async = false;
      document.head.appendChild(scriptEl);
      head.insertBefore(scriptEl, head.firstElementChild);
    });
  }

  private importStyles() {
    const styles = [
      'https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css',
      'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css'
    ]

    const head = document.head;

    styles.forEach(style => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = style;
      head.insertBefore(linkEl, head.firstElementChild);
    });
  }
}
