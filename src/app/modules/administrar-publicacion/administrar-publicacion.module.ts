import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListPublicacionComponent } from '../administrar-publicacion/list-publicacion/list-publicacion.component';
import { AdministrarPublicacionComponent } from './administrar-publicacion.component';

const routes: Routes = [
  {path: '', component: AdministrarPublicacionComponent, canActivate:[authGuard]},
  {path: 'list', component: ListPublicacionComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarPublicacionModule { }