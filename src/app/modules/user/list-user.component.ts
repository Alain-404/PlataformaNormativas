import { Component, DestroyRef } from '@angular/core';
import { AuthUtility } from '../../shared/auth-utility';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { Constante } from '../../shared/constante';
import { AppService } from '../../services/app.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogCrudComponent } from './Dialogs/dialog-crud.component';
@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  salir: boolean = false;
  displayedColumns: string[] = ['ID', 'User Name', 'Code', 'Name', 'Roles', 'Acciones'];
  noList: boolean = false;

  constructor(
    private userServ: UserService,
    private router: Router,
    private destroyRef: DestroyRef,
    private appService: AppService,
    public dialog: MatDialog
  ) {
    this.listaUsuario();
  }

  listaUsuario(): void {
    let _pageNumber: number = 1;
    let _pageSize: number = 10;
    let _orderBy: string = "";

    this.appService.activateLoading();
    this.userServ.list(_pageNumber, _pageSize, _orderBy)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.appService.disableLoading();

          if (response.status == Constante.STATUS_OK) {
            this.userList = response.data;
            console.log(this.userList);


            //this.router.navigate(['/user/list']);
            //console.log('Login exitoso:', response.data.token);

          } else {
            //console.error('Error de inicio de sesión:', response);
          }


        },
        error: (err: any) => {
          this.appService.disableLoading();
          this.noList = true;

          //console.error('Error de inicio de sesión:', err);
        }
      });
  }

  openModal(accion: string, idUser?: number): void {
    const dialogRef = this.dialog.open(DialogCrudComponent, {
      data: {
        accion: accion,
        idRecibido: idUser
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listaUsuario()
    });
  }
  /*
  onLogout() {
    const dialogRef = this.dialog.open(DialogConfirmacionComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        AuthUtility.closeSessionData();
        this.router.navigate(['/login']);
      } else if (result === false) {
      }
    });
  }
  */

}
