import { Component } from '@angular/core';
import { ListReportesNormativasComponent } from './list-reportes-normativas/list-reportes-normativas.component';
import { BuscaReportesNormativasComponent } from './busca-reportes-normativas/busca-reportes-normativas.component';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { PruebaBuscaComponent } from './prueba-busca/prueba-busca.component';


@Component({
  selector: 'app-reportes-normativas',
  standalone: true,
  imports: [ListReportesNormativasComponent, BuscaReportesNormativasComponent, MatDividerModule, CommonModule, MatIconModule, MatButtonModule, PruebaBuscaComponent],
  templateUrl: './reportes-normativas.component.html',
  styleUrl: './reportes-normativas.component.scss'
})
export class ReportesNormativasComponent {
  
}



