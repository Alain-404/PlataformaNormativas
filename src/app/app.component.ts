import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ListUserComponent } from './modules/user/list-user.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthUtility } from './shared/auth-utility';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppUtility } from './shared/app-utility';
import { Observable } from 'rxjs/internal/Observable';
import { AppService } from './services/app.service';
import { async } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressBarModule,

    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //loading$ = new Observable<boolean>();
  loading: boolean = true;

  /*title = 'plantilla';
  authenticated: boolean = false;*/

  constructor(
    //private router: Router,
    private appService: AppService,

  ) {
    this.appService.getValueLoading().subscribe(x => this.loading = x);
    //this.loading = async this.appService.getValueLoading().toPromise();

    //this.authenticated = AuthUtility.isAuthenticated();

    //this.value = appUtility.getValueLoading();
  }

  /*onLogout() {
    AuthUtility.closeSessionData();

    this.router.navigate(['/login']);
  }*/
}
