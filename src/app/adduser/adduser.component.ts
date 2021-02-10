import { Profil } from './../Entity/Profil';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm= new FormGroup({

    nom: new FormControl('') ,
    prenom: new FormControl('') ,
    username: new FormControl('') ,
    profil: new FormControl('') ,
    photo: new FormControl('') ,
    password: new FormControl('') ,
    telephone: new FormControl('') ,
    adresse: new FormControl('')


  }) ;


  constructor(private usService: UserserviceService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.addForm.value.password="password" ;
    this.addForm.value.profil="api/admin/profils/"+ this.addForm.value.profil
    this.usService.addusers(this.addForm.value);

console.log(this.addForm.value) ;
  }

  logout() {

    this.authService.logout() ;
  }

}
