import { Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./components/public/public.routes').then((m) => m.PUBLIC_ROUTES),
  },
];
