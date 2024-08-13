import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      localStorage.setItem('user', JSON.stringify({ username, password }));

      alert('Registration successful! Please login.');
      this.router.navigate(['./login/login']);  // Redirect to the login page
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
