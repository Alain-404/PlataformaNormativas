import { Component } from '@angular/core';
import { ListProcesoMpComponent } from './list-proceso-mp/list-proceso-mp.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-administrar-proceso-mp',
  standalone: true,
  imports: [ListProcesoMpComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-proceso-mp.component.html',
  styleUrl: './administrar-proceso-mp.component.scss'
})
export class AdministrarProcesoMpComponent {

}


