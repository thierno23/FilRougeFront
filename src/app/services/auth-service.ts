import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable ()
export class AuthService{
  constructor(private http:HttpClient){

  }
  private url="http://127.0.0.1:8000/api/login_check"
  login(username: string,password: string){
    const header = new HttpHeaders( {'Content-type':'application/json'});
    const data = '{"username":"' + username + '","password":"' + password +'"}';
    return this.http.post(this.url,data,{headers:header});
  }
}
