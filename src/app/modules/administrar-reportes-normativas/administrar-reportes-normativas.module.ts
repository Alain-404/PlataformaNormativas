import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListAdministrarReportesComponent } from '../administrar-reportes-normativas/list-administrar-reportes/list-administrar-reportes.component';


const routes: Routes = [
  {path: 'list', component: ListAdministrarReportesComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListAdministrarReportesComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdministrarReportesNormativasModule { }