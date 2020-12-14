import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profil } from '../Entity/Profil';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profils:Profil[] = [];
  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
  this.profilService.getprofils().subscribe(
    data=>{
      this.profils = data;
      this.profils=this.profils['hydra:member'];
    }
  )

  }


}

