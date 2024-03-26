import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListControlUsuariosComponent } from './list-control-usuarios/list-control-usuarios.component';
import { ControlAccesoUsuariosComponent } from './control-acceso-usuarios.component';
import { BuscadorFechaAccesosComponent } from './buscador-fecha-accesos/buscador-fecha-accesos.component';

const routes: Routes = [
  {path: '', component: ControlAccesoUsuariosComponent, canActivate:[authGuard]},
  {path: 'busca', component: BuscadorFechaAccesosComponent, canActivate:[authGuard]},
  {path: 'list', component: ListControlUsuariosComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListControlUsuariosComponent,
    BuscadorFechaAccesosComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ControlAccesoUsuariosModule { }