import { Component } from '@angular/core';
import { ListProcesosComponent } from './list-procesos/list-procesos.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-usr-procesos',
  standalone: true,
  imports: [ListProcesosComponent, MatDividerModule],
  templateUrl: './usr-procesos.component.html',
  styleUrl: './usr-procesos.component.scss'
})
export class UsrProcesosComponent {

}
