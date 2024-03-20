import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import  {AdministrarUsuariosComponent} from './administrar-usuarios.component';

const routes: Routes = [
  {path: '', component: AdministrarUsuariosComponent, canActivate:[authGuard]},
  {path: 'list', component: UsuariosComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosComponent,
    AdministrarUsuariosComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarUsuariosModule { }


