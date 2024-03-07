import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { FormVideoComponent } from './form-video/form-video.component';


const routes: Routes = [
  {path: 'list', component: FormVideoComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FormVideoComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrarVideoModule { }
