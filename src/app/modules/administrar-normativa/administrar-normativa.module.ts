import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { ListNormativaComponent } from './list-normativa/list-normativa.component';
import { EditNormativaComponent } from './edit-normativa/edit-normativa.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'list', component: ListNormativaComponent, canActivate:[authGuard]},


  {path: 'new', component: EditNormativaComponent, canActivate:[authGuard]},
  {path: 'edit/:id', component: EditNormativaComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListNormativaComponent,
    EditNormativaComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarNormativaModule { }

