import { Component } from '@angular/core';
import { ListGuiasComponent } from './list-guias/list-guias.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-usr-guias',
  standalone: true,
  imports: [ListGuiasComponent, MatDividerModule],
  templateUrl: './usr-guias.component.html',
  styleUrl: './usr-guias.component.scss'
})
export class UsrGuiasComponent {

}


