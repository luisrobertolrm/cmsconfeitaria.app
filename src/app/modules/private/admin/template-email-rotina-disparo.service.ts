import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateEmailRotinaDisparoService {

  constructor(private http:HttpClient) { }
  
  Enviar(id:number|null, templateEmailId: any, rotinaDisparoId:number|null){
    var url = environment.urlApi+'/TemplateEmailRotinaDisparo/AdicionarTamplateEmailRotinaDisparo';

    var props = {
      "id":id,
      "templateEmailId":templateEmailId,
      "rotinaDisparoId":rotinaDisparoId
    }

    return this.http.post(url,props)
  }
}
