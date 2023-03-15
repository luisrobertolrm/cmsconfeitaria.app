import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, retry, Subscriber } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { AutenticacaoModelView, IUser } from './interfaces';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtHelperService } from '@auth0/angular-jwt';

export const NOME_TOKEN: string = 'access_token2';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient, private route: ActivatedRoute, private messageService: MessageService, private sanitizer: DomSanitizer) {
  }

  
  estaAutenticado():boolean {

    var autInString = sessionStorage.getItem(NOME_TOKEN);

    if(!autInString) return false;

    var token = JSON.parse(autInString);

    if(!token.hora){
      return false;
    }

    let dataExpiracao: Date = (new Date(token.hora.exp * 1000));
    let agora:any = new Date();

    if(dataExpiracao <= agora){
      this.logout();
      return false;
    }

    return true;
  }

  autenticarRemoto(usuario:string, senha:string):Observable<any> {

    var url = environment.urlApi + "/Autenticacao/Autenticar";

    var retorno = new Observable<Boolean>((subscriber)=>{

      this.http.post(url, {usuario:usuario, senha: senha}).subscribe( (resp:any) => {

        if(resp.hora){

          var autenticacaoToken = JSON.stringify(resp);
          sessionStorage.setItem(NOME_TOKEN, autenticacaoToken);

          subscriber.next(true);
        }
        else subscriber.next(false);

      });

    });

    return retorno;

  }

  private decodeToken(resp: AutenticacaoModelView) {

    //this.menuSubject.next(resp.menu as MenuItem[]);

    //var imagePath = 'data:image/jpeg;base64,' + resp.foto;

    let usr: any = {
      nome: resp.nome,
    };

  }

  logout() {
    localStorage.removeItem(NOME_TOKEN);
  }

  
    getMenu(){
       return [
        {label: 'Administração', routerLink:'', items:[{label: 'Receitas', routerLink: 'manter-receitas'}]},
     ] as MenuItem[];
    }


}

