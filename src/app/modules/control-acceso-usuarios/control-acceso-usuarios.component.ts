import { Component } from '@angular/core';
import { ListControlUsuariosComponent } from './list-control-usuarios/list-control-usuarios.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BuscadorFechaAccesosComponent } from './buscador-fecha-accesos/buscador-fecha-accesos.component';

@Component({
  selector: 'app-control-acceso-usuarios',
  standalone: true,
  imports: [ListControlUsuariosComponent, BuscadorFechaAccesosComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './control-acceso-usuarios.component.html',
  styleUrl: './control-acceso-usuarios.component.scss'
})
export class ControlAccesoUsuariosComponent {

}


