import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { EditUserComponent } from './edit-user.component';
import { ListUserComponent } from './list-user.component';
//import { childGuard } from '../../guards/child.guard';

const routes: Routes = [
  {path: 'list', component: ListUserComponent, canActivate:[authGuard]},
  {path: 'new', component: EditUserComponent, canActivate:[authGuard]},
  {path: 'edit/:id', component: EditUserComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ListUserComponent,
    EditUserComponent,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
