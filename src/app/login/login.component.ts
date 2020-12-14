import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
jwt= new JwtHelperService;
username=''
password='';
roles:any;
loginform: any = {}
  constructor(private auth: AuthService) { }


  ngOnInit(): void {
  }

  seconnecter(){
    this.auth.login(this.username,this.password).subscribe(
      data=>{
        localStorage.setItem('token', data.token);
        const Decode = this.jwt.decodeToken(data.token);
        localStorage.setItem('roles', Decode.roles[0]);
        console.log(data);
      }
    )
  }
}
