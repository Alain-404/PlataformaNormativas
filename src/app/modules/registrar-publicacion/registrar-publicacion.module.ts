import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { FormRegistrarPublicacionComponent } from './form-registrar-publicacion/form-registrar-publicacion.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

const routes: Routes = [
  {path: 'list', component: FormRegistrarPublicacionComponent, canActivate:[authGuard]},
  //{path: 'edit', component: ListUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FormRegistrarPublicacionComponent,

    HttpClientModule, AngularEditorModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class RegistrarPublicacionModule { }



