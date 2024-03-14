import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrInicioComponent } from './usr-inicio.component';


const routes: Routes = [
  {path: '', component: UsrInicioComponent, canActivate:[authGuard]},
  //{path: 'list', component: ListPerfilesComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrInicioComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UsrInicioModule { }




