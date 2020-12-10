import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username=''
password=''
  constructor(private auth: AuthService) { }


  ngOnInit(): void {
  }

  seconnecter(){
    this.auth.login(this.username,this.password).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
