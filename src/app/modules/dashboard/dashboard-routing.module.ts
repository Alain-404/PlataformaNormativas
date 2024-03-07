import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { Menuopcion1Component } from '../modulo1/menuopcion1.component';
import { Menuopcion2Component } from '../modulo2/menuopcion2.component';


const routes: Routes = [
  //{ path: '', redirectTo: Constante.URL_DASHBOARD, pathMatch: 'full' },
  //{ path: Constante.URL_DASHBOARD, component: DashboardComponent,
  { path: '', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard]},
      { path: 'opcion1', component: Menuopcion1Component, canActivate: [authGuard]},
      { path: 'opcion2', component: Menuopcion2Component, canActivate: [authGuard]},
      { path: 'moduser', loadChildren: () => import('../user/user.module').then(m => m.UserModule), canActivate:[authGuard]},


      { path: 'RegistrarNormativa', loadChildren: () => import('../registrar-normativa/registrar-normativa.module').then(m => m.RegistrarNormativaModule), canActivate:[authGuard]},
      { path: 'AdministrarNormativa', loadChildren: () => import('../administrar-normativa/administrar-normativa.module').then(m => m.AdministrarNormativaModule), canActivate:[authGuard]},
      { path: 'AdministrarTipoNormativa', loadChildren: () => import('../administrar-tipo-normativas/administrar-tipo-normativas.module').then(m => m.AdministrarTipoNormativasModule), canActivate:[authGuard]},
      { path: 'RegistrarPublicacion', loadChildren: () => import('../registrar-publicacion/registrar-publicacion.module').then(m => m.RegistrarPublicacionModule), canActivate:[authGuard]},
      { path: 'AdministrarPublicacion', loadChildren: () => import('../administrar-publicacion/administrar-publicacion.module').then(m => m.AdministrarPublicacionModule), canActivate:[authGuard]},
      { path: 'RegistrarVideo', loadChildren: () => import('../registrar-video/registrar-video.module').then(m => m.RegistrarVideoModule), canActivate:[authGuard]},
      { path: 'AdministrarVideo', loadChildren: () => import('../administrar-video/administrar-video.module').then(m => m.AdministrarVideoModule), canActivate:[authGuard]},
      { path: 'RegistrarProcesoMP', loadChildren: () => import('../registrar-proceso-mp/registrar-proceso-mp.module').then(m => m.RegistrarProcesoMpModule), canActivate:[authGuard]},
      { path: 'AdministrarProcesoMP', loadChildren: () => import('../administrar-proceso-mp/administrar-proceso-mp.module').then(m => m.AdministrarProcesoMpModule), canActivate:[authGuard]},
      { path: 'AdministrarPerfiles', loadChildren: () => import('../administrar-perfiles/administrar-perfiles.module').then(m => m.AdministrarPerfilesModule), canActivate:[authGuard]},
      { path: 'ReportesNormativas', loadChildren: () => import('../reportes-normativas/reportes-normativas.module').then(m => m.ReportesNormativasModule), canActivate:[authGuard]},
      { path: 'AdministrarReportesNormativas', loadChildren: () => import('../administrar-reportes-normativas/administrar-reportes-normativas.module').then(m => m.AdministrarReportesNormativasModule), canActivate:[authGuard]},
      { path: 'ControlAccesoUsuarios', loadChildren: () => import('../control-acceso-usuarios/control-acceso-usuarios.module').then(m => m.ControlAccesoUsuariosModule), canActivate:[authGuard]},

      //{ path: 'RegistarNormativa', loadChildren: () => import('../registrar-normativa/registrar-normativa.module').then(m => m.RegistrarNormativaModule), canActivate:[authGuard]},
      //{ path: '', loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule), canActivate:[authGuard]},
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  //{path: 'list', component: ListUserComponent, canActivate:[authGuard]},
  //{path: 'new', component: EditUserComponent, canActivate:[authGuard]},
  //{path: 'edit/:id', component: EditUserComponent, canActivate:[authGuard]},
  { path: '**', component: NopagefoundComponent, canActivate: [authGuard] },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //ListUserComponent,
    //EditUserComponent,
    HomeComponent,


    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
