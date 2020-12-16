import { Observable } from 'rxjs';
import { HttpInterceptor ,HttpEvent , HttpRequest , HttpResponse , HttpHandler ,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService  implements HttpInterceptor{
  token = this.auth.getToken()

  constructor( private auth:AuthService) {

  }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    request =request.clone({ headers: request.headers.set('Authorization', 'Bearer ' +this.token)});

    request =request.clone({ headers: request.headers.set('Accept','application/json')});


    return next.handle(request)



  }

}
