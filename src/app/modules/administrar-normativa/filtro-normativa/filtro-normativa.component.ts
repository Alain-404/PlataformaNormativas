import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filtro-normativa',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './filtro-normativa.component.html',
  styleUrl: './filtro-normativa.component.scss'
})
export class FiltroNormativaComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
