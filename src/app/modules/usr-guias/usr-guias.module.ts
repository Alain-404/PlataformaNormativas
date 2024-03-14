import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrGuiasComponent } from './usr-guias.component';
import { ListGuiasComponent } from './list-guias/list-guias.component';


const routes: Routes = [
  {path: '', component: UsrGuiasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListGuiasComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrGuiasComponent,
    ListGuiasComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrGuiasModule { }
