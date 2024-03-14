import { Component } from '@angular/core';
import { ListNormativasComponent } from './list-normativas/list-normativas.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-usr-normativas',
  standalone: true,
  imports: [ListNormativasComponent, MatDividerModule],
  templateUrl: './usr-normativas.component.html',
  styleUrl: './usr-normativas.component.scss'
})
export class UsrNormativasComponent {

}
