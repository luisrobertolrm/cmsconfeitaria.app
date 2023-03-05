import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot,  CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LocationRouteGuard implements  CanActivateChild  {

  constructor(private router: ActivatedRoute, private authenticationService: AuthenticationService){
    
  }

  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return true;
      
    var menus: MenuItem[] = this.authenticationService.getCurrentMenu();

    var ok = false;

    menus.forEach(element => {
      element?.items?.forEach(item => {
          if("/" + item.routerLink == state.url || item.routerLink == state.url) {
            ok = true;
          }
      });
    });

    return ok;
  }
  
}
