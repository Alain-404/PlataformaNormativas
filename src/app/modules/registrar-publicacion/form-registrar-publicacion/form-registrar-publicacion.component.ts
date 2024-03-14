import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormControlName } from '@angular/forms';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import {Inject, OnInit} from '@angular/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/fr';


@Component({
  selector: 'app-form-registrar-publicacion',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    provideMomentDateAdapter(),],
  imports: [FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule, 
    HttpClientModule, AngularEditorModule,
    MatButtonModule,
    MatSlideToggleModule,
    CommonModule,
    MatDatepickerModule],
  templateUrl: './form-registrar-publicacion.component.html',
  styleUrl: './form-registrar-publicacion.component.scss'
})
export class FormRegistrarPublicacionComponent {

  //angularEditorLogo = `<img alt="angular editor logo" src="${ANGULAR_EDITOR_LOGO_URL}">`;
  //Editor = '';
  myForm: FormGroup;

  constructor(
    private _adapter: DateAdapter<any>,
  private _intl: MatDatepickerIntl,
  @Inject(MAT_DATE_LOCALE) private _locale: string,




    public fb: FormBuilder

  ) {
    this.myForm = this.fb.group({
      
      titulo : ['', [Validators.required, Validators.minLength(5)]],
      fpublicacion: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      textEditor: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  procesar(){
    //console.log(this.normativa);
  }

  config: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadURL: '../../v1/image',
    // uploadUrl: 'v1/image',
    // upload: (file: File) => {... },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};


getDateFormatString(): string {
  return 'DD/MM/YYYY';
}

}


