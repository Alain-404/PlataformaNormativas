import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrProcesosComponent } from './usr-procesos.component';
import { ListProcesosComponent } from './list-procesos/list-procesos.component';


const routes: Routes = [
  {path: '', component: UsrProcesosComponent, canActivate:[authGuard]},
  {path: 'list', component: ListProcesosComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrProcesosComponent,
    ListProcesosComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrProcesosModule { }
