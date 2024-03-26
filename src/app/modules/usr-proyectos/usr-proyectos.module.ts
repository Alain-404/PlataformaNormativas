import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrProyectosComponent } from './usr-proyectos.component';
import { ListProyectosComponent } from './list-proyectos/list-proyectos.component';
import { VisualizarProyectosComponent } from './visualizar-proyectos/visualizar-proyectos.component';

const routes: Routes = [
  {path: '', component: UsrProyectosComponent, canActivate:[authGuard]},
  {path: 'list', component: ListProyectosComponent, canActivate:[authGuard]},
  {path: 'view', component: VisualizarProyectosComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrProyectosComponent,
    VisualizarProyectosComponent,
    ListProyectosComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrProyectosModule { }











