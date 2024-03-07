import { CanActivateFn, Router } from '@angular/router';
import { AuthUtility } from '../shared/auth-utility';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if (AuthUtility.isAuthenticated()) {
    //console.log("authGuard: logeado");

    return true;
  } else {
    console.log("authGuard: enviar a login");

    const url = router.navigate(['/login']);
    return false;
  }

};
