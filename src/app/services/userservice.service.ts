import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private _url = "http://127.0.0.1:8000/api/admin/users";

  constructor(private http : HttpClient,private Auth : AuthService) { }

  getusers(){
    // intercepteur

    return this.http.get<any>(this._url);
  }

}
