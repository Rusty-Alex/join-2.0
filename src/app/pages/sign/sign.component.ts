import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseService } from '../../shared/service/firebase/firebase.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {
  regexEmail = /^[^\s@]+@([a-zA-Z0-9-]+\.)+(com|org|net|edu|gov|mil|info|biz|de|uk|fr|ca|au|us|cn|jp|in|ru|app|shop|tech|online|blog)$/;
  showPassword: boolean = false;
  passwordVisible: boolean = false;
  nameControl = new FormControl('');
  checked = new FormControl(false);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regexEmail)
  ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(public firestoreService: FirebaseService, public router: Router) { }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  onSign() {

  }

  showPasswordOn() {
    this.showPassword = true; 
    
  }

}
