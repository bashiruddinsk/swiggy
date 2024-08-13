import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

      if (storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
        this.router.navigate(['/home']);  // Navigate to home page on successful login
      } else {
        alert('Invalid credentials!');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onRegister() {
    this.router.navigate(['./login/register']);  // Navigate to the registration page
  }
}
