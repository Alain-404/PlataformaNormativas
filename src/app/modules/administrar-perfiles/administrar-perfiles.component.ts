import { Component } from '@angular/core';
import { ListPerfilesComponent } from './list-perfiles/list-perfiles.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-administrar-perfiles',
  standalone: true,
  imports: [ListPerfilesComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-perfiles.component.html',
  styleUrl: './administrar-perfiles.component.scss'
})
export class AdministrarPerfilesComponent {

}

