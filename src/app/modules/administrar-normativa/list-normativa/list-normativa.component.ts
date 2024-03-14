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
  tipo: string;
  nnormativas: string;
  vigencia: string;
  version: string;
  orden: string;
  area: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

const areas: string[] = [
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
];

const tipos: string[] = [
  "G-Recursos Humanos",    "C-Recursos Humanos",    "G-Finanzas",    "C-Finanzas",    "G-Contabilidad",    "C-Contabilidad",    "G-Ventas",    "C-Ventas",    "G-Marketing",    "C-Marketing",    "G-Desarrollo de Negocios",    "C-Desarrollo de Negocios",    "G-Operaciones",    "C-Operaciones",    "G-Tecnología de la Información",    "C-Tecnología de la Información",    "G-Servicio al Cliente",    "C-Servicio al Cliente",    "G-Gestión de Proyectos",    "C-Gestión de Proyectos"
];
const nnormativas: string[] = [
  "Estatutos",
    "Manuales",
    "Procedimientos",
    "Códigos",
    "Políticas",
    "Directrices",
    "Reglamentos",
    "Normativas",
    "Protocolos",
    "Lineamientos",
];

const vigencia: string[] = [
  "13/03/2024",
    "14/03/2024",
    "15/03/2024",
    "16/03/2024",
    "17/03/2024",
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
  selector: 'app-list-normativa',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-normativa.component.html',
  styleUrl: './list-normativa.component.scss'
})


export class ListNormativaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nro', 'area', 'tipo', 'nnormativa', 'fvigencia', 'version', 'orden', 'acciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    // id: id.toString(),
    // name: name,
    // progress: Math.round(Math.random() * 100).toString(),
    // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    nro: id.toString(),
    area: areas[Math.round(Math.random() * (areas.length - 1))],
    tipo: tipos[Math.round(Math.random() * (tipos.length - 1))],
    nnormativas: nnormativas[Math.round(Math.random() * (nnormativas.length - 1))],
    vigencia: vigencia[Math.round(Math.random() * (vigencia.length - 1))],
    version: Math.round(Math.random() * 100).toString(),
    orden: Math.round(Math.random() * 100).toString(),
    
  };
}















