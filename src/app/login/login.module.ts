// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginRoutingModule } from './login-routing.module';

// @NgModule({
//   declarations: [
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     LoginRoutingModule,
    
//   ]
// })
// export class LoginModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
