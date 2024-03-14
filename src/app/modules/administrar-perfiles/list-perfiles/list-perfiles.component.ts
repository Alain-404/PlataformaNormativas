import { Component, Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface UserData {
  nro: string;
  perfil: string;
  gerencias: string;
  cargos: string;
}

const perfil: string[] = [
  "Gestión de Recursos Humanos",
    "Control Financiero",
    "Desarrollo de Procedimientos Contables",
    "Estrategias de Ventas",
    "Campañas de Marketing",
    "Planificación de Desarrollo de Negocios",
    "Gestión de Operaciones",
    "Desarrollo de Tecnologías de la Información",
    "Servicio al Cliente",
    "Gestión de Proyectos",
    "Auditoría Interna",
    "Gestión de Calidad",
    "Cumplimiento Legal y Regulatorio",
    "Gestión de Riesgos",
    "Gestión de Incidentes y Problemas",
];
const cargos: string[] = [
  "Gestión de Recursos Humanos",
"Contabilidad y Finanzas",
"Ventas y Marketing",
"Desarrollo de Productos",
"Atención al Cliente", ];
const gerencias: string[] = [
  "Recursos Humanos",
  "Finanzas",
  "Contabilidad",
  "Ventas",
  "Marketing",
  "Desarrollo de Negocios",
  "Operaciones",
  "Tecnología de la Información",
  "Servicio al Cliente",
  "Gestión de Proyectos",
  "Calidad",
  "Logística",
  "Legal",
  "Compras",
  "Innovación",
  "Planificación Estratégica",
  "Relaciones Públicas",
  "Recursos Materiales",
  "Auditoría Interna",
  "Desarrollo Organizacional"
];

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`Primera pagina`;
  itemsPerPageLabel = $localize`Registros por pagina:`;
  lastPageLabel = $localize`Ultima pagina`;
  nextPageLabel = 'Pagina siguiente';
  previousPageLabel = 'Pagina anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Pagina 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Pagina ${page + 1} de ${amountPages}`;
  }
}


@Component({
  selector: 'app-list-perfiles',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-perfiles.component.html',
  styleUrl: './list-perfiles.component.scss'
})

export class ListPerfilesComponent {
  displayedColumns: string[] = ['nro', 'perfil', 'gerencias', 'cargos', 'opciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    const users = Array.from({length: 200}, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
function createNewUser(id: number): UserData {
  return {

  nro: id.toString(),
  perfil: perfil[Math.round(Math.random() * (perfil.length - 1))],
  gerencias: gerencias[Math.round(Math.random() * (gerencias.length - 1))],  
  cargos: cargos[Math.round(Math.random() * (cargos.length - 1))],     
};
}

