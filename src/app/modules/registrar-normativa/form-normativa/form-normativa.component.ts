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
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,MatIconModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatSelectModule, 
    MatDividerModule, 
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './form-normativa.component.html',
  styleUrl: './form-normativa.component.scss'
})

export class FormNormativaComponent{


  ProcesoCtrl = new FormControl('');
  filteredProcesos: Observable<string[]>;
  Procesos: string[] = [];
  allProcesos: string[] = ["Gestión de Recursos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  GerenciaCtrl = new FormControl('');
  filteredGerencias: Observable<string[]>;
  Gerencias: string[] = [];
  allGerencias: string[] = ["Oficina Central", "Oficina Regional Norte", "Oficina Regional Sur", "Oficina Regional Este", "Oficina Regional Oeste"];

  PerfilCtrl = new FormControl('');
  filteredPerfils: Observable<string[]>;
  Perfils: string[] = [];
  allPerfils: string[] = ["Administrador", "Usuario", "Desarrollador", "Analista", "Gerente", "Supervisor"];

  announcer = inject(LiveAnnouncer);

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
      nombreNormativa: ['', [Validators.required]],
      versionNormativa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      vigencia: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      //vigencia: ['', [Validators.required, this.customDateValidator()]], 
      palabraClave: ['', [Validators.required, Validators.minLength(3)]],
      contactoEmail: ['', [Validators.required, Validators.email]],
      archivo: [],
      objetivoNormativa: ['', [Validators.required, Validators.minLength(5)]],

    });


    this.filteredProcesos = this.ProcesoCtrl.valueChanges.pipe(
      startWith(null),
      map((Proceso: string | null) => (Proceso ? this._filterProceso(Proceso) : this.allProcesos.slice())),
    );

    this.filteredGerencias = this.GerenciaCtrl.valueChanges.pipe(
      startWith(null),
      map((Gerencia: string | null) => (Gerencia ? this._filterGerencia(Gerencia) : this.allGerencias.slice())),
    );

    this.filteredPerfils = this.PerfilCtrl.valueChanges.pipe(
      startWith(null),
      map((Perfil: string | null) => (Perfil ? this._filterPerfil(Perfil) : this.allPerfils.slice())),
    );

    // this.filteredopcions = this.opcionCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((opcion: string | null) => (opcion ? this._filter(opcion) : this.allopcions.slice())),
    // );
  }

  ngOnInit() { }
  saveData() {
    console.log(this.myForm.value);
  }

  // customDateValidator() {
  //   return (control) => {
  //     const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/;
  //     if (!dateRegex.test(control.value)) {
  //       return { 'invalidDate': true };
  //     }
  //     return null;
  //   };
  // }

  procesar() {
    console.log(this.normativa);
  }

  // soloFecha(e) {
  //   let key = e.keyCode || e.which;
  //   let tecla = String.fromCharCode(key).toLowerCase();
  //   let caracteres = "0123456789/";
  //   let especiales = <any>caracteres;
  //   let tecla_especial = false
  //   for (var i in especiales) {
  //     if (key == especiales[i]) {
  //       tecla_especial = true;
  //       break;
  //     }
  //   }
  //   if (caracteres.indexOf(tecla) == -1 && !tecla_especial) {
  //     return false;
  //   }
  // }

  normativa = {
    nombre: '',
  };

  pdfInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }














  @ViewChild('ProcesoInput') ProcesoInput: ElementRef<HTMLInputElement>;
  todosProcesoSeleccionado: boolean = false;
  toggleProcesoTodos() {
    this.todosProcesoSeleccionado = !this.todosProcesoSeleccionado;
    if (this.todosProcesoSeleccionado) {
      this.Procesos = ["Todos"];
    } else {
      this.Procesos = [];
    }
  }
  removeProceso(Proceso: string): void {
    const index = this.Procesos.indexOf(Proceso);

    if (index >= 0) {
      this.Procesos.splice(index, 1);

      this.announcer.announce(`Removed ${Proceso}`);
    }
  }
  selectedProceso(event: MatAutocompleteSelectedEvent): void {
    this.Procesos.push(event.option.viewValue);
    this.ProcesoInput.nativeElement.value = '';
    this.ProcesoCtrl.setValue(null);
  }
  onInputKeydownProceso(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterProceso(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allProcesos.filter(Proceso => Proceso.toLowerCase().includes(filterValue));
  }

  @ViewChild('GerenciaInput') GerenciaInput: ElementRef<HTMLInputElement>;
  todosGerenciaSeleccionado: boolean = false;
  toggleGerenciaTodos() {
    this.todosGerenciaSeleccionado = !this.todosGerenciaSeleccionado;
    if (this.todosGerenciaSeleccionado) {
      this.Gerencias = ["Todos"];
    } else {
      this.Gerencias = [];
    }
  }
  removeGerencia(Gerencia: string): void {
    const index = this.Gerencias.indexOf(Gerencia);

    if (index >= 0) {
      this.Gerencias.splice(index, 1);

      this.announcer.announce(`Removed ${Gerencia}`);
    }
  }
  selectedGerencia(event: MatAutocompleteSelectedEvent): void {
    this.Gerencias.push(event.option.viewValue);
    this.GerenciaInput.nativeElement.value = '';
    this.GerenciaCtrl.setValue(null);
  }
  onInputKeydownGerencia(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterGerencia(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allGerencias.filter(Gerencia => Gerencia.toLowerCase().includes(filterValue));
  }

  @ViewChild('PerfilInput') PerfilInput: ElementRef<HTMLInputElement>;
  todosPerfilSeleccionado: boolean = false;
  togglePerfilTodos() {
    this.todosPerfilSeleccionado = !this.todosPerfilSeleccionado;
    if (this.todosPerfilSeleccionado) {
      this.Perfils = ["Todos"];
    } else {
      this.Perfils = [];
    }
  }
  removePerfil(Perfil: string): void {
    const index = this.Perfils.indexOf(Perfil);

    if (index >= 0) {
      this.Perfils.splice(index, 1);

      this.announcer.announce(`Removed ${Perfil}`);
    }
  }
  selectedPerfil(event: MatAutocompleteSelectedEvent): void {
    this.Perfils.push(event.option.viewValue);
    this.PerfilInput.nativeElement.value = '';
    this.PerfilCtrl.setValue(null);
  }
  onInputKeydownPerfil(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterPerfil(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allPerfils.filter(Perfil => Perfil.toLowerCase().includes(filterValue));
  }
}