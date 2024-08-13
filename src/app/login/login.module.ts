import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this module

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    // ... any other components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule  // <-- Add this line
    // ... any other modules
  ],
  exports: [
    LoginComponent,
    RegisterComponent
    // ... any other components you wish to export
  ]
})
export class LoginModule { }
