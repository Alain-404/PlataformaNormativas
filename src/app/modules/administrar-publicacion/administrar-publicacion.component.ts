import { Component } from '@angular/core';
import { ListPublicacionComponent } from './list-publicacion/list-publicacion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-administrar-publicacion',
  standalone: true,
  imports: [ListPublicacionComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-publicacion.component.html',
  styleUrl: './administrar-publicacion.component.scss'
})
export class AdministrarPublicacionComponent {

}
