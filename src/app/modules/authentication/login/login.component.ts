import { Component, DestroyRef, OnInit} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication.service';
import { AuthUtility } from '../../../shared/auth-utility';
import { Constante } from '../../../shared/constante';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  //imports: [MatFormFieldModule, CommonModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  styleImage = 'documentos';
  form!: FormGroup;
  hide: boolean = true;
  userName: string = '';
  passWord: string = '';
  errorCredenciales: boolean = false;
  


  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private destroyRef: DestroyRef,
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {
    
  }
  ngOnInit(): void {
    this.buildForm();
  }


  private buildForm(): any {
     this.form = this.formBuilder.group({
       username: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(6)]],
         });
   }

  onLogin(): void {
    this.errorCredenciales = false;
    let usuario: any = {
      username: this.userName,
      password: this.passWord
    };

    this.appService.activateLoading();
    this.auth.login(usuario)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: any) => {
          this.appService.disableLoading();

          if (response.status == Constante.STATUS_OK) {
            AuthUtility.logSessionData(response.data.token);
            this.router.navigate([Constante.URL_DASHBOARD_HOME]);
            //console.log('Login exitoso:', response.data.token);

          } else {

            console.error('Error de inicio de sesión:', response);
            this.errorCredenciales= true;
          }


        },
        error: (err: any) => {
          this.appService.disableLoading();
          this.errorCredenciales= true;
          console.error('Error de inicio de sesión:', err);
        }
      });
  }

  unsplashClass(): any {
    return {
      'min-height': '100%',
      /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
      /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
      background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }

  onLogout() {
    AuthUtility.closeSessionData();
  }

  /*progressBar(estado: boolean) {
    if(estado==true) this.appService.activateLoading();
    else this.appService.disableLoading();
  }*/

}
