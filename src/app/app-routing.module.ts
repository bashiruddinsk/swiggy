import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: './login/login', component: LoginComponent },
  { path: './login/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: './login/login', pathMatch: 'full' },
  {path:'**',redirectTo:'./login/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
