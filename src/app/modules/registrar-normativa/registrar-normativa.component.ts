import { Component } from '@angular/core';
import { FormNormativaComponent } from './form-normativa/form-normativa.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-registrar-normativa',
  standalone: true,
  imports: [FormNormativaComponent, MatDividerModule],
  templateUrl: './registrar-normativa.component.html',
  styleUrl: './registrar-normativa.component.scss'
})
export class RegistrarNormativaComponent{
  

}







