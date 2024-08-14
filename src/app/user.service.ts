import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registeredUsers: { username: string, password: string }[] = [];

  register(username: string, password: string): boolean {
    if (this.isUserRegistered(username)) {
      return false; // User already registered
    }
    this.registeredUsers.push({ username, password });
    return true;
  }

  isUserRegistered(username: string): boolean {
    return this.registeredUsers.some(user => user.username === username);
  }

  validateUser(username: string, password: string): boolean {
    return this.registeredUsers.some(user => user.username === username && user.password === password);
  }
}
