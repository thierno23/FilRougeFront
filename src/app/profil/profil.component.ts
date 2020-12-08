import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
  }

  profils = this.profilService.getprofil();

}

