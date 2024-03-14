import { Component } from '@angular/core';
import { ListNormativaComponent } from './list-normativa/list-normativa.component';
import { EditNormativaComponent } from './edit-normativa/edit-normativa.component';
import { FiltroNormativaComponent } from './filtro-normativa/filtro-normativa.component';




import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-administrar-normativa',
  standalone: true,
  imports: [
    ListNormativaComponent,
    EditNormativaComponent,
    FiltroNormativaComponent,
    MatDividerModule,
  ],
  templateUrl: './administrar-normativa.component.html',
  styleUrl: './administrar-normativa.component.scss'
})
export class AdministrarNormativaComponent {

}
