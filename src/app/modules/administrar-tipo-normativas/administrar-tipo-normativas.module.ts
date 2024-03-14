import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListTipoNormativasComponent } from '../administrar-tipo-normativas/list-tipo-normativas/list-tipo-normativas.component';
import { AdministrarTipoNormativasComponent } from './administrar-tipo-normativas.component';

const routes: Routes = [
  {path: '', component: AdministrarTipoNormativasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListTipoNormativasComponent, canActivate:[authGuard]},
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
export class AdministrarTipoNormativasModule { }