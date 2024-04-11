import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  ifsubmit : boolean = false;

  onSubmit(): void {
    this.ifsubmit = true;
  }
}
