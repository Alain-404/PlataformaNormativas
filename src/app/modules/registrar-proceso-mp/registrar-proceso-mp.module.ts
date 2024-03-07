import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { FormProcesoMpComponent } from './form-proceso-mp/form-proceso-mp.component';


const routes: Routes = [
  {path: 'list', component: FormProcesoMpComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FormProcesoMpComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrarProcesoMpModule { }


