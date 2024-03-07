import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthUtility } from '../../shared/auth-utility';
import { Constante } from '../../shared/constante';
import { DialogConfirmacionComponent } from './dialogs/dialog-confirmacion.component';
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //authenticated: boolean = false;
  _const = Constante;

  constructor(
      private router: Router,
      public dialog: MatDialog
    ) {
      //this.authenticated = AuthUtility.isAuthenticated();
    }

  onLogout() {
    const dialogRef = this.dialog.open(DialogConfirmacionComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        AuthUtility.closeSessionData();
        this.router.navigate(['/login']);
        this.router.navigate([Constante.URL_LOGIN]);
      } else if (result === false) {
      }
    });
  }
}
