import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrLreportesComponent } from './usr-lreportes.component';
import { ListReportesComponent } from './list-reportes/list-reportes.component';


const routes: Routes = [
  {path: '', component: UsrLreportesComponent, canActivate:[authGuard]},
  {path: 'list', component: ListReportesComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrLreportesComponent,
    ListReportesComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrLreportesModule { }
