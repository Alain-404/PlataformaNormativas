import { Component } from '@angular/core';
import { ListProyectosComponent } from './list-proyectos/list-proyectos.component';
import { MatDividerModule } from '@angular/material/divider';
import { VisualizarProyectosComponent } from './visualizar-proyectos/visualizar-proyectos.component';

@Component({
  selector: 'app-usr-proyectos',
  standalone: true,
  imports: [ListProyectosComponent, MatDividerModule, VisualizarProyectosComponent],
  templateUrl: './usr-proyectos.component.html',
  styleUrl: './usr-proyectos.component.scss'
})
export class UsrProyectosComponent {

}
