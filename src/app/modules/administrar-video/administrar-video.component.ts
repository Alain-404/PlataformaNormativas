import { Component } from '@angular/core';
import { ListVideoComponent } from './list-video/list-video.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-administrar-video',
  standalone: true,
  imports: [ListVideoComponent, MatFormFieldModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule],
  templateUrl: './administrar-video.component.html',
  styleUrl: './administrar-video.component.scss'
})
export class AdministrarVideoComponent {

}



