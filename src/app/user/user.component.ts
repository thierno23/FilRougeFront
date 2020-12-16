import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../Entity/UserClass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users:User[] = [];

  constructor( private UserserviceService:UserserviceService) { }

  ngOnInit(): void {

    this.UserserviceService.getusers().subscribe(
      data=>{
        this.users = data;
      },
      error=>{
        console.log(error)
      }

    )
  }
}
