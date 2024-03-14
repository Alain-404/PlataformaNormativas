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
  fecha: string;
  descripcion: string;
}

const nombre: string[] = [
  "Informe Mensual de Ventas",
    "Balance Financiero Trimestral",
    "Evaluación de Desempeño del Personal",
    "Planificación Estratégica Anual",
    "Informe de Gastos Operativos",
];
const fecha: string[] = [
  "13/03/2024 : 09:00",
    "15/03/2024 : 11:30",
    "17/03/2024 : 14:15",
    "20/03/2024 : 10:45",
    "22/03/2024 : 08:20",
];
const descripcion: string[] = [
  "Este informe detalla las ventas realizadas durante el último mes y proporciona análisis sobre el rendimiento de los productos.",
    "El balance financiero trimestral resume los ingresos y gastos de la empresa durante los últimos tres meses, junto con análisis financiero.",
    "La evaluación de desempeño del personal proporciona retroalimentación sobre el rendimiento de los empleados y establece objetivos para el próximo período.",
    "La planificación estratégica anual define los objetivos y estrategias clave de la empresa para el próximo año fiscal.",
    "El informe de gastos operativos detalla los costos asociados con las operaciones comerciales, incluidos salarios, suministros y otros gastos.",
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
  selector: 'app-list-administrar-reportes',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-administrar-reportes.component.html',
  styleUrl: './list-administrar-reportes.component.scss'
})
export class ListAdministrarReportesComponent {
  displayedColumns: string[] = ['nro', 'nombre', 'fecha', 'descripcion', 'opciones'];
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
  nombre: nombre[Math.round(Math.random() * (nombre.length - 1))],
  fecha: fecha[Math.round(Math.random() * (fecha.length - 1))],  
  descripcion: descripcion[Math.round(Math.random() * (descripcion.length - 1))],     
};
}

