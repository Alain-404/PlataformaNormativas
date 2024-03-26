import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrFavoritosComponent } from './usr-favoritos.component';
import { ListFavoritosComponent } from './list-favoritos/list-favoritos.component';
import { VisualizarFavoritosComponent } from './visualizar-favoritos/visualizar-favoritos.component';


const routes: Routes = [
  {path: '', component: UsrFavoritosComponent, canActivate:[authGuard]},
  {path: 'list', component: ListFavoritosComponent, canActivate:[authGuard]},
  {path: 'view', component: VisualizarFavoritosComponent, canActivate:[authGuard]},
  //{path: 'list', component: ListPerfilesComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrFavoritosComponent,
    ListFavoritosComponent,
    VisualizarFavoritosComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UsrFavoritosModule { }
