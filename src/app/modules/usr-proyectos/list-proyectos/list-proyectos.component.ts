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

import { MatDialog } from '@angular/material/dialog';
import { VisualizarProyectosComponent } from '../visualizar-proyectos/visualizar-proyectos.component';

export interface UserData {
  nro: string;
  nnormativa: string;
  fvigencia: string;
  version: string;
}

const nnormativa: string[] = [
  "ISO 9001",    "ISO 14001",    "ISO 27001",    "ISO 45001",    "SOX (Sarbanes-Oxley Act)",
    "HIPAA (Health Insurance Portability and Accountability Act)",
    "GDPR (General Data Protection Regulation)",
    "PCI DSS (Payment Card Industry Data Security Standard)",
    "FERPA (Family Educational Rights and Privacy Act)",
    "FISMA (Federal Information Security Management Act)",
    "COBIT (Control Objectives for Information and Related Technologies)",
    "ITIL (Information Technology Infrastructure Library)",
    "SOC 2 (Service Organization Control 2)",
    "NIST (National Institute of Standards and Technology)",
    "GLBA (Gramm-Leach-Bliley Act)"
];
const fvigencia: string[] = [
    "13/03/2024",    "15/03/2024",    "17/03/2024",    "20/03/2024",    "22/03/2024"];  
const version: string[] = [
  "1.0",    "1.1",    "2.0",    "2.1",    "3.0",    "3.1",    "4.0",    "4.1",    "5.0",    "5.1",    "6.0",    "6.1",    "7.0",    "7.1",    "8.0"];

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
  selector: 'app-list-proyectos',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-proyectos.component.html',
  styleUrl: './list-proyectos.component.scss'
})
export class ListProyectosComponent {

  openPdfModal(): void {
    const dialogRef = this.dialog.open(VisualizarProyectosComponent, {
      width: '80%',
      height: '90%'
    });
  }

  displayedColumns: string[] = ['star','nro', 'nnormativa', 'fvigencia', 'version', 'acciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {

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
  nnormativa: nnormativa[Math.round(Math.random() * (nnormativa.length - 1))],  
  fvigencia: fvigencia[Math.round(Math.random() * (fvigencia.length - 1))],     
  version: version[Math.round(Math.random() * (version.length - 1))],   
};
}














