import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService); // Inject LoaderService

  loaderService.showLoader();
  return next(req).pipe(
    finalize(() => loaderService.hideLoader()), // Hide loader after request completes
    catchError((error: HttpErrorResponse) => {
      // Handle errors here if needed
      return throwError(() => error);
    })
  );
};
