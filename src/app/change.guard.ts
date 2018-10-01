import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WcsService } from './wcs.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangeGuard implements CanActivate {

  constructor(private wcsService: WcsService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (state.url !== '/' && state.url) {
        return this.wcsService.changeScreen(state.url).pipe(catchError(s => {
          alert("could not reach server");
          return of(true);
        }));
      }
      return of (true);
  } 
}
