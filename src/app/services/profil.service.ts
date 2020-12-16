import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../Entity/Profil';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
private _url = "http://127.0.0.1:8000/api/admin/profils";

  constructor(private http : HttpClient,private Auth : AuthService) { }

  getprofils(){
    // intercepteur

    return this.http.get<any>(this._url);
  }
}
