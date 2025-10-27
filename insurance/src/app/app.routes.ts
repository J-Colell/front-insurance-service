import { Routes } from '@angular/router';
import { LayoutShellComponent } from './shared/components/layout/layout-shell.component';

export const routes: Routes = [{

    path: '',
    component: LayoutShellComponent,
    children: [
    {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HOME_ROUTES),

   },
  ],
  },
  {
    path: '**',
    redirectTo: '',
  },];
