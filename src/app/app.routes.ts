import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  //{path:'login', component: LoginComponent},
  //{path:'user', component: ListUserComponent}
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('../app/modules/authentication/login/login.component').then(m => m.LoginComponent), data: { preload: true } },
  { path: '', loadChildren: () => import('../app/modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule), canActivate:[authGuard]},
  //{ path: '', loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule), canActivate:[authGuard]},

  //{ path: '',  loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule),  data: { preload: true }}
];
