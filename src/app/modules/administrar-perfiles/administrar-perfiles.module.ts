import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListPerfilesComponent } from './list-perfiles/list-perfiles.component';
import { AdministrarPerfilesComponent } from './administrar-perfiles.component';


const routes: Routes = [
  {path: '', component: AdministrarPerfilesComponent, canActivate:[authGuard]},
  {path: 'list', component: ListPerfilesComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListPerfilesComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarPerfilesModule { }