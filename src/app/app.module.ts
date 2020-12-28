import { HttpinterceptorService } from './services/httpinterceptor.service';
import { AuthService } from './services/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ProfilComponent } from './profil/profil.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AngularMaterialModule } from './materialAngular/angular-material.module';
import { PromoComponent } from './promo/promo.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { CompetenceComponent } from './competence/competence.component';
import { GrpcompetenceComponent } from './grpcompetence/grpcompetence.component';
import { ProfildesortieComponent } from './profildesortie/profildesortie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ApprenantComponent,
    CmComponent,
    FormateurComponent,
    ProfilComponent,
    NavComponent,
    NotfoundComponent,
    UserComponent,
    AdduserComponent,
    PromoComponent,
    ReferentielsComponent,
    CompetenceComponent,
    GrpcompetenceComponent,
    ProfildesortieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    AngularMaterialModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass:HttpinterceptorService, multi:true}
    ,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
