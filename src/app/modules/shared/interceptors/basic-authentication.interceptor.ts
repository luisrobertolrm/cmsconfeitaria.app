import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthenticationInterceptor implements HttpInterceptor {

  constructor() {}
  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('validuser:validpassword'));

    const modifiedReq = request.clone({ headers });
    return next.handle(modifiedReq);
  }
}
