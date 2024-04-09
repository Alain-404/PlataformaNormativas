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
import { ExcelService } from '../../../adapters/excel.service';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";


export interface UserData {
  dni: string;
  nombres: string;
  cargo: string;
  ufingreso: string;
  gerencia: string;
  oficina: string;
  ingreso: string;
}

const dni: string[] = [
  "12345678",
  "87654321",
  "23456789",
  "98765432",
  "34567890",
  "09876543",
  "45678901",
  "10987654",
  "56789012",
  "21098765",
  "67890123",
  "32109876",
  "78901234",
  "43210987",
  "89012345",
  "54321098",
  "90123456",
  "65432109",
  "34567890",
  "09876543",
  "45678901",
  "10987654",
  "56789012",
  "21098765",
  "67890123",
  "32109876",
  "78901234",
  "43210987",
  "89012345",
  "54321098",
  "90123456",
  "65432109",
  "34567890",
  "09876543",
  "45678901",
  "10987654",
  "56789012",
  "21098765",
  "67890123",
  "32109876",
  "78901234",
  "43210987",
  "89012345",
  "54321098",
  "90123456",
  "65432109",
  "34567890",
  "09876543",
  "45678901",
  "10987654"
];

const nombres: string[] = [
  "Luis Pérez",
  "Ana Torres",
  "Javier Díaz",
  "María García",
  "Carlos Rodríguez",
  "Luz Flores",
  "Pedro González",
  "Lucía Sánchez",
  "Diego Chavez",
  "Rosa Ramírez",
  "Juan Vargas",
  "Carmen López",
  "Miguel Castro",
  "Diana Medina",
  "Andrés Huaman",
  "Patricia Ruiz",
  "Gustavo Castillo",
  "Verónica Quispe",
  "Ricardo Villanueva",
  "Isabel Tello"
];

const cargo: string[] = [
  "Gerente de Sucursal",
  "Asistente de Caja",
  "Ejecutivo de Préstamos",
  "Analista de Riesgos",
  "Asesor Financiero",
  "Jefe de Operaciones",
  "Cajero Principal",
  "Director Comercial",
  "Analista de Créditos",
  "Oficial de Seguridad",
  "Gerente de Créditos",
  "Asesor de Inversiones",
  "Director de Recursos Humanos",
  "Coordinador de Ventas",
  "Jefe de Tesorería",
  "Analista de Mercado",
  "Asistente Administrativo",
  "Gerente de Negocios",
  "Asesor Legal",
  "Especialista en Cobranzas"
];

const ufingreso: string[] = [
  "2023-11-15T08:30:00",
  "2022-07-03T14:45:00",
  "2023-02-20T10:20:00",
  "2021-09-10T09:00:00",
  "2022-05-05T12:10:00",
  "2023-08-18T16:55:00",
  "2022-12-30T11:25:00",
  "2023-04-27T13:15:00",
  "2022-02-14T09:40:00",
  "2021-12-01T10:00:00",
  "2023-06-28T15:30:00",
  "2022-08-09T08:00:00",
  "2022-03-22T11:50:00",
  "2023-01-05T14:00:00",
  "2022-10-12T10:45:00",
  "2022-04-07T08:15:00",
  "2021-10-25T09:50:00",
  "2022-11-19T12:35:00",
  "2023-05-14T11:05:00",
  "2023-09-03T09:25:00"
];

const gerencia: string[] = [
  "Gerencia de Operaciones",
  "Gerencia Comercial",
  "Gerencia de Riesgos",
  "Gerencia de Recursos Humanos",
  "Gerencia Financiera",
  "Gerencia de Tecnología",
  "Gerencia de Créditos",
  "Gerencia de Negocios",
  "Gerencia Legal",
  "Gerencia de Marketing",
  "Gerencia de Tesorería",
  "Gerencia de Control Interno",
  "Gerencia de Desarrollo",
  "Gerencia de Planificación",
  "Gerencia de Seguridad",
  "Gerencia de Auditoría",
  "Gerencia de Cumplimiento",
  "Gerencia de Banca Personal",
  "Gerencia de Banca Corporativa",
  "Gerencia de Banca Privada"
];

const oficina: string[] = [
  "Oficina Central - Lima",
  "Sucursal Miraflores - Lima",
  "Agencia San Isidro - Lima",
  "Sucursal San Borja - Lima",
  "Agencia La Molina - Lima",
  "Sucursal Cusco - Cusco",
  "Agencia Arequipa - Arequipa",
  "Sucursal Trujillo - La Libertad",
  "Agencia Chiclayo - Lambayeque",
  "Sucursal Piura - Piura",
  "Agencia Iquitos - Loreto",
  "Sucursal Tacna - Tacna",
  "Agencia Huancayo - Junín",
  "Sucursal Huánuco - Huánuco",
  "Agencia Pucallpa - Ucayali",
  "Sucursal Cajamarca - Cajamarca",
  "Agencia Ayacucho - Ayacucho",
  "Sucursal Huaraz - Ancash",
  "Agencia Tumbes - Tumbes",
  "Sucursal Puno - Puno"
];

const ingreso: string[] = [
  "83",
    "23",
    "12",
    "6",
    "90",
    "45",
    "49",
    "51",
    "22",
    "13",
    "2"
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
  selector: 'app-list-control-usuarios',
  standalone: true,
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule, HttpClientModule, MatPaginatorModule,
    MatFormFieldModule, MatTableModule, MatSortModule, MatSelectModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './list-control-usuarios.component.html',
  styleUrl: './list-control-usuarios.component.scss'
})
export class ListControlUsuariosComponent {

  displayedColumns: string[] = ['dni', 'nombres', 'cargo', 'ufingreso', 'gerencia', 'oficina', 'ingreso'];
  dataSource: MatTableDataSource<UserData>;

  columnas = new FormControl('');
  columnaList: string[] = ['DNI', 'Nombres y Apellidos', 'Cargo', 'Ultima Fecha de Ingreso', 'Gerencia', 'Oficina', 'Cantidad de Ingresos'];

  data: any[]; // Aquí deberías tener tus datos de la tabla

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private excelService: ExcelService) { 

    const users = Array.from({length: 40}, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);

    
  }
  exportToExcel(): void {
    this.excelService.exportToExcel(this.displayedColumns, 'archivo_excel'); // 'archivo_excel' es el nombre del archivo que se generará
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

    dni: dni[Math.round(Math.random() * (dni.length - 1))],      
    nombres: nombres[Math.round(Math.random() * (nombres.length - 1))],  
    cargo: cargo[Math.round(Math.random() * (cargo.length - 1))],
    ufingreso: ufingreso[Math.round(Math.random() * (ufingreso.length - 1))],
    gerencia: gerencia[Math.round(Math.random() * (gerencia.length - 1))],  
    oficina: oficina[Math.round(Math.random() * (oficina.length - 1))],  
    ingreso: ingreso[Math.round(Math.random() * (ingreso.length - 1))],  
  };
}




