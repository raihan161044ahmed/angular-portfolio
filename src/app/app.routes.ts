import { Routes } from '@angular/router';

export const routes: Routes = [
      {
            path: 'header',
            loadComponent: () => import('../app/components/header/header.component').then(c => c.HeaderComponent),
            
      },
      {
            path: 'footer',
            loadComponent: () => import('../app/components/footer/footer.component').then(c => c.FooterComponent),
            
      }

];
