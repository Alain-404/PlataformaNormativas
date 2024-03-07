import { Component, DestroyRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { Constante } from '../../shared/constante';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  _constante = Constante;
  _id: number = 0;

  _usuario: any = {
    id: 0,
    name: "",
    username: "",
    email: ""
  };

  constructor(
    private userServ: UserService,
    private router: Router,
    private destroyRef: DestroyRef,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {

    this._id = this.activatedRoute.snapshot.params['id'];

    console.log("_id:", this._id);

    //let qp = this.activatedRoute.snapshot.queryParams;




    //this.tipoBandeja = Number(this.activeRoute.snapshot.data.tipoBandeja);

  }

  onGrabar() {

    let _user = {
      id: 0,
      name: this._usuario.name,
      username: this._usuario.username,
      email: this._usuario.email,
      code: this._usuario.code,
      roles: this._usuario.roles,
    };

    this.appService.activateLoading();
    this.userServ.saveNewUser(_user)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.appService.disableLoading();

          if (response.status == this._constante.STATUS_OK) {

            console.log(response.message);

            this.router.navigate(['/moduser/list']);
            //console.log('Login exitoso:', response.data.token);

          } else {
            console.error(response.message);
          }


        },
        error: (err: any) => {
          this.appService.disableLoading();

          console.error('Error inesperado: ', err);
        }
      });
  }

  onActualizar() {
    let _user = {
      id: 1005,
      name: "Alexander222",
      username: "alexander",
      email: "alexander.correo@gmail.com"
    };

    this.userServ.updateNewUser(_user)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          if (response.status == this._constante.STATUS_OK) {

            console.log(response.message);

            this.router.navigate(['/moduser/list']);

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
