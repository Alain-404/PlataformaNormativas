import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListProcesoMpComponent } from './list-proceso-mp/list-proceso-mp.component';


const routes: Routes = [
  {path: 'list', component: ListProcesoMpComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListProcesoMpComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarProcesoMpModule { }