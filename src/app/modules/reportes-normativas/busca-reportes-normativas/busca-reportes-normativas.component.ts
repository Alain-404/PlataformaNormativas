import {MatInputModule} from '@angular/material/input';
import {Component, ElementRef, ViewChild, Inject, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
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
import 'moment/locale/fr';

import {AutofillMonitor} from '@angular/cdk/text-field';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-busca-reportes-normativas',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
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

  proceso = new FormControl('');
  procesoList: string[] = ["Gestión de Recursos Humanos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  myForm: FormGroup;

  constructor(
    private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl,
    @Inject(MAT_DATE_LOCALE) private _locale: string,

    // private _adapter: DateAdapter<any>,
    // private _intl: MatDatepickerIntl,
    // Inject(MAT_DATE_LOCALE) private _locale: string,

    public fb: FormBuilder
    
  ) {
    this.myForm = this.fb.group({

      date: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      nombreVideo : ['', [Validators.required, Validators.minLength(5)]],
      procesoVideo : ['', [Validators.required, Validators.minLength(3)]],
      archivo: [],
      descripcionVideo: [],
      
    });

    this.filteredOficinas = this.OficinaCtrl.valueChanges.pipe(
      startWith(null),
      map((Oficina: string | null) => (Oficina ? this._filter(Oficina) : this.allOficinas.slice())),
    );
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

  videoInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  separatorKeysCodes: number[] = [ENTER, COMMA];
  OficinaCtrl = new FormControl('');
  filteredOficinas: Observable<string[]>;
  Oficinas: string[] = [];
  allOficinas: string[] = ["Gestión de Recursos Humanos", "Control de Inventarios", "Gestión de Proyectos", "Desarrollo de Productos", "Control de Calidad"];

  categoriaCtrl = new FormControl('');
  filteredcategoria: Observable<string[]>;
  categoria: string[] = [];
  categorias: string[] = ["Oficina Central", "Oficina Regional Norte", "Oficina Regional Sur", "Oficina Regional Este", "Oficina Regional Oeste"];

  perfilList: string[] = ["Administrador", "Usuario", "Desarrollador", "Analista", "Gerente", "Supervisor"];

  @ViewChild('OficinaInput') OficinaInput: ElementRef<HTMLInputElement>;

  announcer = Inject(LiveAnnouncer);

  //seleccionados: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    
    // Add our Oficina
    if (value) {
      //this.seleccionados.push(value);
      this.Oficinas.push(value);
    }

    event.chipInput!.clear();

    this.OficinaCtrl.setValue(null);
  }

  remove(Oficina: string): void {
    const index = this.Oficinas.indexOf(Oficina);

    if (index >= 0) {
      this.Oficinas.splice(index, 1);

      this.announcer.announce(`Removed ${Oficina}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Oficinas.push(event.option.viewValue);
    this.OficinaInput.nativeElement.value = '';
    this.OficinaCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allOficinas.filter(Oficina => Oficina.toLowerCase().includes(filterValue));
  }


  isAllSelected = false;

}



