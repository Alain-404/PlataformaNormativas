import { Component, DestroyRef, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { ListUserComponent } from '../list-user.component';
import { Constante } from '../../../shared/constante';
import { AuthUtility } from '../../../shared/auth-utility';
@Component({
  selector: 'app-dialog-crud',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule,CommonModule],
  templateUrl: './dialog-crud.component.html',
  styleUrl: './dialog-crud.component.scss'
})
export class DialogCrudComponent {
  idUser: number;
  action: string;
  authenticated: boolean = false;
  infousuario: any;
  _constante = Constante;

  constructor(
    public dialogRef: MatDialogRef<ListUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userServ: UserService,
    private destroyRef: DestroyRef,
  ) {
    this.idUser = data.idRecibido;
    this.action = data.accion;
    this.authenticated = AuthUtility.isAuthenticated();
    if (this.action === 'editar')
      this.obtenerInfo();
    else if (this.action === 'nuevo')
      this.recibirNuevosDatos();
  }
  obtenerInfo(): void {
    this.userServ.getInfoUser(this.idUser)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          if (response.status == Constante.STATUS_OK) {
            this.infousuario = response.data;
            console.log(this.infousuario);
          } else {
          }
        },
        error: (err: any) => {
        }
      });
  }
  confirm():void{
    if (this.action === 'editar')
      this.editarInfo();
    else if (this.action === 'nuevo')
      this.crearRegistro(this.infousuario);
      this.dialogRef.close();
  }
  editarInfo(): void {
    this.userServ.updateNewUser(this.infousuario)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          if (response.status == Constante.STATUS_OK) {
            this.infousuario = response.data;
            console.log(this.infousuario);
          } else {
          }
        },
        error: (err: any) => {
        }
      });
  }
  onEditar(): void {
    this.authenticated = AuthUtility.isAuthenticated();
    this.editarInfo();
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  recibirNuevosDatos():void{
    this.infousuario={
      username:'',
      name:'',
      email:'',
      roles:'',
      password:'',
    }
  }
  crearRegistro(infousuario:any): void {
    let _user = infousuario
    this.userServ.saveNewUser(_user)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          if (response.status == this._constante.STATUS_OK) {

            console.log(response.message);
            //console.log('Login exitoso:', response.data.token);

          } else {
            console.error(response.message);
          }


        },
        error: (err: any) => {
          console.error('Error inesperado: ', err);
        }
      });
  }

}
