import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, inject, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-normativa',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,MatIconModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatSelectModule, 
    MatDividerModule, 
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './form-normativa.component.html',
  styleUrl: './form-normativa.component.scss'
})

export class FormNormativaComponent implements OnInit {


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

    // this.filteredopcions = this.opcionCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((opcion: string | null) => (opcion ? this._filter(opcion) : this.allopcions.slice())),
    // );
  }

  ngOnInit() { }
  saveData(){
    console.log(this.myForm.value);
  }

procesar(){
    console.log(this.normativa);
  }
 
  normativa = {
    nombre: '',
   };

  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // opcionCtrl = new FormControl('');
  // filteredopcions: Observable<string[]>;
  // opcions: string[] = [];
  // allopcions: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  // @ViewChild('opcionInput') opcionInput: ElementRef<HTMLInputElement>;

  // announcer = inject(LiveAnnouncer);

  

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   if (value && !this.opcions.includes(value)) {
  //     this.opcions.push(value);
  //   }
  //   event.chipInput!.clear();

  //   this.opcionCtrl.setValue(null);
  // }
  
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   const selectedOption = event.option.viewValue;
  
  //   if (!this.opcions.includes(selectedOption)) {
  //     this.opcions.push(selectedOption);
  //     this.opcionInput.nativeElement.value = '';
  //     this.opcionCtrl.setValue(null);
  //   }
  // }


  // // selected(event: MatAutocompleteSelectedEvent): void {
  // //   this.opcions.push(event.option.viewValue);
  // //   this.opcionInput.nativeElement.value = '';
  // //   this.opcionCtrl.setValue(null);
  // // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allopcions.filter(opcion => opcion.toLowerCase().includes(filterValue));
  // }
  
  // remove(opcion: string): void {
  //   const index = this.opcions.indexOf(opcion);

  //   if (index >= 0) {
  //     this.opcions.splice(index, 1);

  //     this.announcer.announce(`Removed ${opcion}`);
  //   }
  // }


  pdfInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  
}


