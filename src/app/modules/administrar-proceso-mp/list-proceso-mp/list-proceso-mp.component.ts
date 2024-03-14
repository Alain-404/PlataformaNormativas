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
  responsable: string;
  version: string;
  usuario: string;
  fecha: string;
  ruta: string;
  activo: string;
}

const nombre: string[] = [
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
const responsable: string[] = [
  "Gestión de Recursos Humanos",
"Contabilidad y Finanzas",
"Ventas y Marketing",
"Desarrollo de Productos",
"Atención al Cliente", ];
const version: string[] = [
  "Versión 1.0",
    "Versión 2.0",
    "Versión 3.0",
    "Versión 4.0",
    "Versión 5.0",
    "Versión 6.0",
    "Versión 7.0",
    "Versión 8.0",
];
const usuario: string[] = [  "usuario1",    "usuario2",    "usuario3",    "user123",    "john_doe"];
const fecha: string[] = [  "2024-03-17T14:29:51.906Z",  "2024-04-01T05:10:41.221Z",  "2024-03-18T08:54:28.104Z",  "2024-03-30T03:42:13.707Z",  "2024-03-25T19:31:02.809Z",  "2024-03-15T18:52:59.431Z",  "2024-04-09T01:17:14.235Z",  "2024-03-24T10:45:20.764Z",  "2024-03-22T17:32:09.115Z",  "2024-04-10T13:07:38.530Z",  "2024-03-23T12:11:06.579Z",  "2024-04-07T11:03:27.916Z",  "2024-03-29T20:06:05.629Z",  "2024-03-31T18:25:49.120Z",  "2024-04-06T04:37:33.502Z"];
const ruta: string[] = [ 
  "/documentos/procesos/administrativos/Gestion_RRHH.docx",
    "/documentos/procesos/administrativos/Control_Financiero.xlsx",
    "/documentos/procesos/administrativos/Desarrollo_Procedimientos_Contables.pdf",
    "/documentos/procesos/administrativos/Estrategias_Ventas.pptx",
    "/documentos/procesos/administrativos/Campanias_Marketing.doc",
    "/documentos/procesos/administrativos/Planificacion_Negocios.docx",
    "/documentos/procesos/administrativos/Gestion_Operaciones.pdf",
    "/documentos/procesos/administrativos/Desarrollo_Tecnologias_Informacion.doc",
    "/documentos/procesos/administrativos/Servicio_Cliente.xlsx",
    "/documentos/procesos/administrativos/Gestion_Proyectos.ppt",
    "/documentos/procesos/administrativos/Auditoria_Interna.pdf",
    "/documentos/procesos/administrativos/Gestion_Calidad.docx",
    "/documentos/procesos/administrativos/Cumplimiento_Legal_Regulatorio.pdf",
    "/documentos/procesos/administrativos/Gestion_Riesgos.xlsx",
];
const activo: string[] = [  "Si",    "No",];

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
  selector: 'app-list-proceso-mp',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-proceso-mp.component.html',
  styleUrl: './list-proceso-mp.component.scss'
})
export class ListProcesoMpComponent {
  displayedColumns: string[] = ['nro', 'nombre', 'responsable', 'version', 'usuario', 'fecha', 'ruta','activo', 'opciones'];
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
  responsable: responsable[Math.round(Math.random() * (responsable.length - 1))],  
  version: version[Math.round(Math.random() * (version.length - 1))],  
  usuario: usuario[Math.round(Math.random() * (usuario.length - 1))],  
  fecha: fecha[Math.round(Math.random() * (fecha.length - 1))],    
  ruta: ruta[Math.round(Math.random() * (ruta.length - 1))],    
  activo: activo[Math.round(Math.random() * (activo.length - 1))],    
};
}
