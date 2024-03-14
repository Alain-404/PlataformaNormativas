import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListVideoComponent } from './list-video/list-video.component';
import { AdministrarVideoComponent } from './administrar-video.component';

const routes: Routes = [
  {path: '', component: AdministrarVideoComponent, canActivate:[authGuard]},
  {path: 'list', component: ListVideoComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListVideoComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarVideoModule { }