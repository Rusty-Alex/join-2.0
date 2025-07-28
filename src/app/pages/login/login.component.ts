import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, Validators, FormControl, FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/service/auth/auth.service';
import { MainVariableService } from '../../shared/service/mainVariable/main-variable.service';




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

  constructor(private router: Router, public authService: AuthService, public mainVariable: MainVariableService) {
    
  }
goToSign(){  
  this.router.navigate(['/sign'])
}

showPasswordOn(){
this.showPassword = true;
}


login(){
this.authService.loginUser(this.emailFormControl.value, this.passwordFormControl.value);
}

checkOfWrite(){
  this.mainVariable.errorLogin = false;
}
}
