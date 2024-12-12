import { Routes } from '@angular/router';
import { ScanComponent } from './components/remote-app/pages/scan/scan.component';
import { MainComponent } from './components/remote-app/pages/main/main.component';
import { RemoteAppComponent } from './components/remote-app/remote-app.component';
import { HomeComponent } from './components/remote-app/pages/home/home.component';
import { RedirectComponent } from './components/remote-app/pages/redirect/redirect.component';

export const routes: Routes = [
    {
        path: '',
        component: RemoteAppComponent,
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: MainComponent,
                children: [
                    {
                        path: 'home',
                        component: HomeComponent
                    },
                    {
                        path: 'scan',
                        component: ScanComponent    
                    },
                    {
                        path: 'redirect',
                        component: RedirectComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'games',
                        pathMatch: 'full'
                    }
                ]
            },
            {
              path: '**',
              redirectTo: 'main/games',
              pathMatch: 'full'
            }
        ]
    }
];

