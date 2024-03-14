import { Component } from '@angular/core';
import { ListTipoNormativasComponent } from './list-tipo-normativas/list-tipo-normativas.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-administrar-tipo-normativas',
  standalone: true,
  imports: [ListTipoNormativasComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-tipo-normativas.component.html',
  styleUrl: './administrar-tipo-normativas.component.scss'
})
export class AdministrarTipoNormativasComponent {

}
