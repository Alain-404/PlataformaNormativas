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

const ANGULAR_EDITOR_LOGO_URL = 'https://raw.githubusercontent.com/kolkov/angular-editor/master/docs/angular-editor-logo.png?raw=true'


@Component({
  selector: 'app-form-registrar-publicacion',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule, 
    HttpClientModule, AngularEditorModule,
    MatButtonModule,
    CommonModule,],
  templateUrl: './form-registrar-publicacion.component.html',
  styleUrl: './form-registrar-publicacion.component.scss'
})
export class FormRegistrarPublicacionComponent {

  angularEditorLogo = `<img alt="angular editor logo" src="${ANGULAR_EDITOR_LOGO_URL}">`;
  htmlContent = '';

  proceso = new FormControl('');
  gerencia = new FormControl('');
  perfil = new FormControl('');
  procesoList: string[] = ["Gestión de Recursos Humanos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];
  gerenciaList: string[] = ["Oficina Central", "Oficina Regional Norte", "Oficina Regional Sur", "Oficina Regional Este", "Oficina Regional Oeste"];
  perfilList: string[] = ["Administrador", "Usuario", "Desarrollador", "Analista", "Gerente", "Supervisor"];

  myForm: FormGroup;



  constructor(
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      procesoNormativa: ['', [Validators.required]],
      gerenciaNormativa: [],
      perfilNormativa: [],
      nombreNormativa : ['', [Validators.required, Validators.minLength(5)]],
      versionNormativa : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      vigencia: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      palabraClave: ['', [Validators.required, Validators.minLength(3)]],
      contactoEmail: ['', [Validators.required, Validators.email]],
      archivo: [],
      objetivoNormativa: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  pdfInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
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



}


