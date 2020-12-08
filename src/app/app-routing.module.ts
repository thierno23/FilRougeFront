import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ProfilComponent } from './profil/profil.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'cm', component: CmComponent},
  {path: 'formateur', component: FormateurComponent} ,
  {path: 'profil', component: ProfilComponent},
  {path: 'nav', component: NavComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

