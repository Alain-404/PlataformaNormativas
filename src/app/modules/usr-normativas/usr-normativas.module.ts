import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrNormativasComponent } from './usr-normativas.component';
import { ListNormativasComponent } from './list-normativas/list-normativas.component';


const routes: Routes = [
  {path: '', component: UsrNormativasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListNormativasComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrNormativasComponent,
    ListNormativasComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrNormativasModule { }
