import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string

  constructor(private authService: AuthService) {}

  login(username: string, password: string): void {
    const success = this.authService.login(username, password);
    if (success) {
      // Redirect to dashboard or update UI
    } else {
      // Display error message
    }
  }
}
