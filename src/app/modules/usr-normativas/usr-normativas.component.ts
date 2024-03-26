import { Component } from '@angular/core';
import { ListNormativasComponent } from './list-normativas/list-normativas.component';
import { MatDividerModule } from '@angular/material/divider';
import { VisualizarNormativasComponent } from './visualizar-normativas/visualizar-normativas.component';

@Component({
  selector: 'app-usr-normativas',
  standalone: true,
  imports: [ListNormativasComponent, MatDividerModule, VisualizarNormativasComponent],
  templateUrl: './usr-normativas.component.html',
  styleUrl: './usr-normativas.component.scss'
})
export class UsrNormativasComponent {

}
