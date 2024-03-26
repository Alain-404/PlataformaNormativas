import {MatInputModule} from '@angular/material/input';
import {Component, ElementRef, ViewChild, Inject, inject, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule, MatDatepickerIntl} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/es';
import {AutofillMonitor} from '@angular/cdk/text-field';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { fechaValidator } from './fechaValidator';


@Component({
  selector: 'app-busca-reportes-normativas',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    provideMomentDateAdapter(),],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule,
    CommonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatChipsModule,
    AsyncPipe
  ],
  templateUrl: './busca-reportes-normativas.component.html',
  styleUrl: './busca-reportes-normativas.component.scss'
})

export class BuscaReportesNormativasComponent {

  myForm: FormGroup;

  OficinaCtrl = new FormControl('');
  filteredOficinas: Observable<string[]>;
  Oficinas: string[] = [];
  allOficinas: string[] = ["Gestión de Recursos Humanos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  CategoriaCtrl = new FormControl('');
  filteredCategorias: Observable<string[]>;
  Categorias: string[] = [];
  allCategorias: string[] = ["Gestión de Recursos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  GerenciaCtrl = new FormControl('');
  filteredGerencias: Observable<string[]>;
  Gerencias: string[] = [];
  allGerencias: string[] = ["Gestión de Recursos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  CargoCtrl = new FormControl('');
  filteredCargos: Observable<string[]>;
  Cargos: string[] = [];
  allCargos: string[] = ["Gestión de Recursos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  announcer = inject(LiveAnnouncer);

  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,

    public fb: FormBuilder

  ) {
    this.myForm = this.fb.group({

      date: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      nombreVideo: ['', [Validators.required, Validators.minLength(5)]],
      procesoVideo: ['', [Validators.required, Validators.minLength(3)]],
      archivo: [],
      descripcionVideo: [],

      // ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$     aun no es estable
      desde: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]], 

    });

    this.filteredOficinas = this.OficinaCtrl.valueChanges.pipe(
      startWith(null),
      map((Oficina: string | null) => (Oficina ? this._filterOficina(Oficina) : this.allOficinas.slice())),
    );

    this.filteredCategorias = this.CategoriaCtrl.valueChanges.pipe(
      startWith(null),
      map((Categoria: string | null) => (Categoria ? this._filterCategoria(Categoria) : this.allCategorias.slice())),
    );

    this.filteredGerencias = this.GerenciaCtrl.valueChanges.pipe(
      startWith(null),
      map((Gerencia: string | null) => (Gerencia ? this._filterGerencia(Gerencia) : this.allGerencias.slice())),
    );

    this.filteredCargos = this.CargoCtrl.valueChanges.pipe(
      startWith(null),
      map((Cargo: string | null) => (Cargo ? this._filterCargo(Cargo) : this.allCargos.slice())),
    );
  }

  ngOnInit() { }
  saveData() {
    console.log(this.myForm.value);
  }

  procesar() {
    console.log(this.normativa);
  }

  normativa = {
    nombre: '',
  };


  @ViewChild('OficinaInput') OficinaInput: ElementRef<HTMLInputElement>;
  todosOficinaSeleccionado: boolean = false;
  toggleOficinaTodos() {
    this.todosOficinaSeleccionado = !this.todosOficinaSeleccionado;
    if (this.todosOficinaSeleccionado) {
      this.Oficinas = ["Todos"];
    } else {
      this.Oficinas = [];
    }
  }
  removeOficina(Oficina: string): void {
    const index = this.Oficinas.indexOf(Oficina);

    if (index >= 0) {
      this.Oficinas.splice(index, 1);

      this.announcer.announce(`Removed ${Oficina}`);
    }
  }
  selectedOficina(event: MatAutocompleteSelectedEvent): void {
    this.Oficinas.push(event.option.viewValue);
    this.OficinaInput.nativeElement.value = '';
    this.OficinaCtrl.setValue(null);
  }
  onInputKeydownOficina(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterOficina(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allOficinas.filter(Oficina => Oficina.toLowerCase().includes(filterValue));
  }

  @ViewChild('CategoriaInput') CategoriaInput: ElementRef<HTMLInputElement>;
  todosCategoriaSeleccionado: boolean = false;
  toggleCategoriaTodos() {
    this.todosCategoriaSeleccionado = !this.todosCategoriaSeleccionado;
    if (this.todosCategoriaSeleccionado) {
      this.Categorias = ["Todos"];
    } else {
      this.Categorias = [];
    }
  }
  removeCategoria(Categoria: string): void {
    const index = this.Categorias.indexOf(Categoria);

    if (index >= 0) {
      this.Categorias.splice(index, 1);

      this.announcer.announce(`Removed ${Categoria}`);
    }
  }
  selectedCategoria(event: MatAutocompleteSelectedEvent): void {
    this.Categorias.push(event.option.viewValue);
    this.CategoriaInput.nativeElement.value = '';
    this.CategoriaCtrl.setValue(null);
  }
  onInputKeydownCategoria(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterCategoria(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategorias.filter(Categoria => Categoria.toLowerCase().includes(filterValue));
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

  @ViewChild('CargoInput') CargoInput: ElementRef<HTMLInputElement>;
  todosCargoSeleccionado: boolean = false;
  toggleCargoTodos() {
    this.todosCargoSeleccionado = !this.todosCargoSeleccionado;
    if (this.todosCargoSeleccionado) {
      this.Cargos = ["Todos"];
    } else {
      this.Cargos = [];
    }
  }
  removeCargo(Cargo: string): void {
    const index = this.Cargos.indexOf(Cargo);

    if (index >= 0) {
      this.Cargos.splice(index, 1);

      this.announcer.announce(`Removed ${Cargo}`);
    }
  }
  selectedCargo(event: MatAutocompleteSelectedEvent): void {
    this.Cargos.push(event.option.viewValue);
    this.CargoInput.nativeElement.value = '';
    this.CargoCtrl.setValue(null);
  }
  onInputKeydownCargo(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (event.key && event.key !== 'Enter') {
      input.value = '';
      event.preventDefault();
    }
  }
  private _filterCargo(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCargos.filter(Cargo => Cargo.toLowerCase().includes(filterValue));
  }

  isAllSelected = false;
}



