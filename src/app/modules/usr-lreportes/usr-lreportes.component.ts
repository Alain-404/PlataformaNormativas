import { Component } from '@angular/core';
import { ListReportesComponent } from './list-reportes/list-reportes.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-usr-lreportes',
  standalone: true,
  imports: [ListReportesComponent, MatDividerModule],
  templateUrl: './usr-lreportes.component.html',
  styleUrl: './usr-lreportes.component.scss'
})
export class UsrLreportesComponent {

}
