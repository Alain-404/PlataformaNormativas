import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ListUserComponent } from '../../user/list-user.component';

@Component({
  selector: 'app-dialog-confirmacion',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './dialog-confirmacion.component.html',
  styleUrl: './dialog-confirmacion.component.scss'
})
export class DialogConfirmacionComponent {
}
