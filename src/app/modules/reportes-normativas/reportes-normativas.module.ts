import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { ListReportesNormativasComponent } from './list-reportes-normativas/list-reportes-normativas.component';
import { BuscaReportesNormativasComponent } from './busca-reportes-normativas/busca-reportes-normativas.component';
import { ReportesNormativasComponent } from './reportes-normativas.component';


const routes: Routes = [
  {path: '', component: ReportesNormativasComponent, canActivate:[authGuard]},
  {path: 'busca', component: BuscaReportesNormativasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListReportesNormativasComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReportesNormativasComponent,
    ListReportesNormativasComponent,
    BuscaReportesNormativasComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReportesNormativasModule { }
