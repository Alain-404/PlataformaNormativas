import { Component } from '@angular/core';
import { ListFavoritosComponent } from './list-favoritos/list-favoritos.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-usr-favoritos',
  standalone: true,
  imports: [ListFavoritosComponent, MatDividerModule],
  templateUrl: './usr-favoritos.component.html',
  styleUrl: './usr-favoritos.component.scss'
})
export class UsrFavoritosComponent {

}

