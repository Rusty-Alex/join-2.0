import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, Validators, FormControl, FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false;
  passwordVisible: boolean = false;
  regexEmail = /^[^\s@]+@([a-zA-Z0-9-]+\.)+(com|org|net|edu|gov|mil|info|biz|de|uk|fr|ca|au|us|cn|jp|in|ru|app|shop|tech|online|blog)$/;

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regexEmail)
  ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private router: Router, ) {
    
  }
goToSign(){  
  this.router.navigate(['/sign'])
}

showPasswordOn(){
this.showPassword = true;
}

onSubmit(){
  
  console.log(this.emailFormControl.value);
  console.log(this.passwordFormControl.value);
  
  
}
}
