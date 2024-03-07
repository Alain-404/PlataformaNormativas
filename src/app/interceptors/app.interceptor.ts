
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { AuthUtility } from '../shared/auth-utility';
import { tap } from 'rxjs';

export const appInterceptor: HttpInterceptorFn = (request, next) => {

  var customRequest = request.clone();

  if (AuthUtility.isAuthenticated()) {
    customRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + AuthUtility.getToken())
    });
  }

  return next(customRequest);
  /*return next(customRequest).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          //this._loading.setLoading(false, request.url);

        }
        return event;
      },
    })
  );*/
};
