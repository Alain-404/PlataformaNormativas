import { Component } from '@angular/core';
import { ListAdministrarReportesComponent } from './list-administrar-reportes/list-administrar-reportes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-administrar-reportes-normativas',
  standalone: true,
  imports: [ListAdministrarReportesComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-reportes-normativas.component.html',
  styleUrl: './administrar-reportes-normativas.component.scss'
})
export class AdministrarReportesNormativasComponent {

}

