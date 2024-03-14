import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormNormativaComponent } from './form-normativa/form-normativa.component';
import { FormsModule } from '@angular/forms';
import { RegistrarNormativaComponent } from './registrar-normativa.component';

const routes: Routes = [
  {path: '', component: RegistrarNormativaComponent, canActivate:[authGuard]},
  {path: 'registro', component: FormNormativaComponent, canActivate:[authGuard]},

  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormNormativaComponent,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class RegistrarNormativaModule { }


