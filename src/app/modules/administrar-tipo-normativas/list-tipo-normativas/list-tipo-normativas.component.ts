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
  nombre: string;
  tipo: string;
}

const nombre: string[] = [
  "G-Recursos Humanos",    "C-Recursos Humanos",    "G-Finanzas",    "C-Finanzas",    "G-Contabilidad",    "C-Contabilidad",    "G-Ventas",    "C-Ventas",    "G-Marketing",    "C-Marketing",    "G-Desarrollo de Negocios",    "C-Desarrollo de Negocios",    "G-Operaciones",    "C-Operaciones",    "G-Tecnología de la Información",    "C-Tecnología de la Información",    "G-Servicio al Cliente",    "C-Servicio al Cliente",    "G-Gestión de Proyectos",    "C-Gestión de Proyectos"
];
const tipo: string[] = [
  "Estatutos",    "Manuales",    "Procedimientos",    "Códigos",    "Políticas",    "Directrices",    "Reglamentos",    "Normativas",    "Protocolos",    "Lineamientos",
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
  selector: 'app-list-tipo-normativas',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-tipo-normativas.component.html',
  styleUrl: './list-tipo-normativas.component.scss'
})
export class ListTipoNormativasComponent implements AfterViewInit{
  displayedColumns: string[] = ['nro', 'nombre', 'tipo', 'acciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    const users = Array.from({length: 600}, (_, k) => createNewUser(k + 1));

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
    nombre: nombre[Math.round(Math.random() * (nombre.length - 1))],
    tipo: tipo[Math.round(Math.random() * (tipo.length - 1))],    
  };
}


