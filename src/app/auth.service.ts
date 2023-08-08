import { Injectable } from '@angular/core';
import { usersData } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    const user = usersData.find((u: any) => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
