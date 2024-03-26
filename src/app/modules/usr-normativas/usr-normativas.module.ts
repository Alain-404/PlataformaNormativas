import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrNormativasComponent } from './usr-normativas.component';
import { ListNormativasComponent } from './list-normativas/list-normativas.component';
import { VisualizarNormativasComponent } from './visualizar-normativas/visualizar-normativas.component';


const routes: Routes = [
  {path: '', component: UsrNormativasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListNormativasComponent, canActivate:[authGuard]},
  {path: 'view', component: VisualizarNormativasComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrNormativasComponent,
    VisualizarNormativasComponent,
    ListNormativasComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrNormativasModule { }
