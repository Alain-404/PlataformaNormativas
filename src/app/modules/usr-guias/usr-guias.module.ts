import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { UsrGuiasComponent } from './usr-guias.component';
import { ListGuiasComponent } from './list-guias/list-guias.component';
import { VisualizarGuiasComponent } from './visualizar-guias/visualizar-guias.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';





const routes: Routes = [
  {path: '', component: UsrGuiasComponent, canActivate:[authGuard]},
  {path: 'list', component: ListGuiasComponent, canActivate:[authGuard]},
  {path: 'ver', component: VisualizarGuiasComponent, canActivate:[authGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    UsrGuiasComponent,
    ListGuiasComponent,
    VisualizarGuiasComponent,
    NgxExtendedPdfViewerModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsrGuiasModule { }
