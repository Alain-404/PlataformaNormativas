import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListReportesNormativasComponent } from './list-reportes-normativas/list-reportes-normativas.component';


const routes: Routes = [
  {path: 'list', component: ListReportesNormativasComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ListReportesNormativasComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportesNormativasModule { }
