import { Injectable } from '@angular/core';
import { Profil } from '../Entity/ProfilClass';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

   // mockdata
profils: Profil[] = [{id: 1, libelle: 'formateur'}, {id: 2, libelle: 'cm'}, {id: 3, libelle: 'apprenant'},
{id: 4, libelle: 'admin'}];

  constructor() { }

  getprofil(){
    return this.profils;
  }
}
