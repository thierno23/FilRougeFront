import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Injectable ()
export class AuthService{
  roles: Array<string>;

  constructor(private http:HttpClient, private router:Router ){

  }
  private url="http://127.0.0.1:8000/api/login_check"
  login(username: string,password: string){
    const header = new HttpHeaders( {'Content-type':'application/json'});
    const data = '{"username":"' + username + '","password":"' + password +'"}';
    return this.http.post<any>(this.url,data,{headers:header});
  }
   getToken(){
     return localStorage.getItem('token');
   }

   isAdmin(){
     return this.roles.indexOf('ROLE_ADMIN')>=0;
   }

   logout(){
     localStorage.removeItem('token') ;
     this.router.navigate(['/login'])
   }
}
