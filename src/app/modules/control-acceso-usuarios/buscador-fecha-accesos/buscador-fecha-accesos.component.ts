import {Component, Inject, OnInit} from '@angular/core';
import {MatDatepickerModule, MatDatepickerIntl} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {provideNativeDateAdapter} from '@angular/material/core';


import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {MatFormFieldControl} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/es';


@Component({
  selector: 'app-buscador-fecha-accesos',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    provideMomentDateAdapter(),],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDividerModule,
    MatDatepickerModule,
    ReactiveFormsModule],
  templateUrl: './buscador-fecha-accesos.component.html',
  styleUrl: './buscador-fecha-accesos.component.scss'
})
export class BuscadorFechaAccesosComponent {
  myForm: FormGroup;

  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    public fb: FormBuilder
  ){
    this.myForm = this.fb.group({

      date: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      // ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$     aun no es estable
      desde: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]], 

    });
  }

  procesar() {
    console.log(this.normativa);
  }
  normativa = {
    nombre: '',
  };
}

