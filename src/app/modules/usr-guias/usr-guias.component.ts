import { Component } from '@angular/core';
import { ListGuiasComponent } from './list-guias/list-guias.component';
import { MatDividerModule } from '@angular/material/divider';
import { VisualizarGuiasComponent } from './visualizar-guias/visualizar-guias.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usr-guias',
  standalone: true,
  imports: [ListGuiasComponent, VisualizarGuiasComponent, MatDividerModule, CommonModule],
  templateUrl: './usr-guias.component.html',
  styleUrl: './usr-guias.component.scss'
})
export class UsrGuiasComponent {

}


