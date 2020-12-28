import { ReferentielsComponent } from './referentiels/referentiels.component';
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
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PromoComponent } from './promo/promo.component';
import { CompetenceComponent } from './competence/competence.component';
import { GrpcompetenceComponent } from './grpcompetence/grpcompetence.component';
import { ProfildesortieComponent } from './profildesortie/profildesortie.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'cm', component: CmComponent},
  {path: 'formateur', component: FormateurComponent} ,
  {path: 'profil', component: ProfilComponent},
  {path: 'nav', component: NavComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'user', component: UserComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'promo', component: PromoComponent },
  {path: 'referentiels', component: ReferentielsComponent},
  {path: 'competence', component: CompetenceComponent},
  {path: 'grpcompetence', component: GrpcompetenceComponent},
  {path: 'profildesortie', component: ProfildesortieComponent},


  {path: '**', redirectTo: '/notfound'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

