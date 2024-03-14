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
  proceso: string;
  archivo: string;
  descripcion: string;
  usuario: string;
  fecha: string;
  activo: string;
}

const nombre: string[] = [
  "Estrategias de Marketing para el 2025",
    "El Futuro del Trabajo Remoto",
    "Cómo Mejorar la Productividad en tu Empresa",
    "Innovación en la Gestión de Recursos Humanos",
    "Los Desafíos de la Transformación Digital",
    "Cómo mejorar la productividad en el trabajo remoto",
    "Estrategias para aumentar las ventas en línea",
    "Los beneficios de la diversidad en el lugar de trabajo",
    "Cómo gestionar eficazmente el tiempo en proyectos",
    "Tendencias tecnológicas que impactarán en los negocios",
];
const proceso: string[] = [
  "Gestión de Recursos Humanos",
"Contabilidad y Finanzas",
"Ventas y Marketing",
"Desarrollo de Productos",
"Atención al Cliente", ];
const archivo: string[] = [
  "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
 ];
const descripcion: string[] = [ 
  "Este video presenta las políticas de la empresa en relación con la gestión de recursos humanos.",
    "Descubre las estrategias de contabilidad y finanzas que han llevado al éxito a nuestra empresa.",
    "Conoce las últimas tendencias en ventas y marketing para mejorar tus resultados comerciales.",
    "Aprende cómo se desarrollan nuevos productos desde la idea hasta su lanzamiento al mercado.",
    "Descubre cómo brindamos un excelente servicio de atención al cliente a nuestros clientes.",
];
const usuario: string[] = [  "usuario1",    "usuario2",    "usuario3",    "user123",    "john_doe"];
const fecha: string[] = [  "2024-03-17T14:29:51.906Z",  "2024-04-01T05:10:41.221Z",  "2024-03-18T08:54:28.104Z",  "2024-03-30T03:42:13.707Z",  "2024-03-25T19:31:02.809Z",  "2024-03-15T18:52:59.431Z",  "2024-04-09T01:17:14.235Z",  "2024-03-24T10:45:20.764Z",  "2024-03-22T17:32:09.115Z",  "2024-04-10T13:07:38.530Z",  "2024-03-23T12:11:06.579Z",  "2024-04-07T11:03:27.916Z",  "2024-03-29T20:06:05.629Z",  "2024-03-31T18:25:49.120Z",  "2024-04-06T04:37:33.502Z"];
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
  selector: 'app-list-video',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule
  ],
  templateUrl: './list-video.component.html',
  styleUrl: './list-video.component.scss'
})
export class ListVideoComponent implements AfterViewInit {
  displayedColumns: string[] = ['nro', 'nombre', 'proceso', 'archivo', 'descripcion', 'usuario', 'fecha', 'activo', 'opciones'];
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
  proceso: proceso[Math.round(Math.random() * (proceso.length - 1))],  
  archivo: archivo[Math.round(Math.random() * (archivo.length - 1))],
  descripcion: descripcion[Math.round(Math.random() * (descripcion.length - 1))],
  usuario: usuario[Math.round(Math.random() * (usuario.length - 1))],  
  fecha: fecha[Math.round(Math.random() * (fecha.length - 1))],    
  activo: activo[Math.round(Math.random() * (activo.length - 1))],    
};
}