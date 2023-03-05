import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './modules/shared/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RooteGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return true;
      
      var autenticado = this.authService.estaAutenticado();

      if (!autenticado){
        this.authService.autenticarRemoto().subscribe(resp=>{
          if(resp == false) window.location.replace(environment.urlRedirectNaoAutenticado);
        });
      }else{
        this.authService.autenticarLocal();
      }

      

    return true;
  }
  
}
