import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, retry, Subscriber } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { IUser, JwtVM } from './interfaces';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';

export const NOME_TOKEN: string = 'access_token2';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser | null>;
  public currentUser: Observable<IUser | null>;

  private menuSubject: BehaviorSubject<MenuItem[]>;
  public menuObservable: Observable<MenuItem[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private messageService: MessageService, private jwtHelper: JwtHelperService,private sanitizer: DomSanitizer) {
    this.currentUserSubject = new BehaviorSubject<IUser | null>(JSON.parse(localStorage.getItem('user') as string));
    this.currentUser = this.currentUserSubject.asObservable();

    this.menuSubject = new BehaviorSubject<MenuItem[]>([] as MenuItem[]);
    this.menuObservable = this.menuSubject.asObservable();

  }

  public getCurrentMenu(): MenuItem[] {
    return this.menuSubject.getValue();
  }

  public get currentUserValue(): IUser | null {
    return this.currentUserSubject.value;
  }

  estaAutenticado():boolean {

    var jwtInString = localStorage.getItem(NOME_TOKEN);

    if(!jwtInString) return false;

    var token = JSON.parse(jwtInString);

    if(!token.token){
      return false;
    }

    var jwtDecoded = this.jwtHelper.decodeToken(token.token);

    let dataExpiracao: Date = (new Date(jwtDecoded.exp * 1000));
    let agora:any = new Date();

    if(dataExpiracao <= agora){
      this.logout();
      return false;
    }

    return true;
  }

  autenticarRemoto(usuario:string, senha:string):Observable<any> {

    var url = "";

    return this.http.post(url, {usuario:usuario, senha: senha});

  }

  autenticarLocal(){
    // var jwtInString:string = localStorage.getItem(NOME_TOKEN)??"";
    // var token = JSON.parse(jwtInString);

    //this.decodeToken(token);

    this.menuSubject.next(this.getMenu());
  }

  private decodeToken(resp: JwtVM) {

    this.menuSubject.next(resp.menu as MenuItem[]);

    var imagePath = 'data:image/jpeg;base64,' + resp.foto;

    let usr: any = {
      nome: resp.nome,
      login: resp.login,
      foto: imagePath,
    };

    this.currentUserSubject.next(usr);
  }

  logout() {
    localStorage.removeItem(NOME_TOKEN);
    this.currentUserSubject.next(null);
    this.menuSubject.next([]);
  }

  
    getMenu(){
       return [
        {label: 'Administração', routerLink:'', items:[{label: 'Receitas', routerLink: 'manter-receitas'}]},
     ] as MenuItem[];
    }


}

