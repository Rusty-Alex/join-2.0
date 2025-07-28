import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseService } from '../../shared/service/firebase/firebase.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/service/auth/auth.service';
import { MainVariableService } from '../../shared/service/mainVariable/main-variable.service';



@Component({
  selector: 'app-sign',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {
  regexEmail = /^[^\s@]+@([a-zA-Z0-9-]+\.)+(com|org|net|edu|gov|mil|info|biz|de|uk|fr|ca|au|us|cn|jp|in|ru|app|shop|tech|online|blog)$/;
  regexName = /^[A-ZÄÖÜa-zäöüß\-]+( [A-ZÄÖÜa-zäöüß\-]+){1,2}$/;
  showPassword: boolean = false;
  passwordVisible: boolean = false;
  checked = new FormControl(false);
  comfirmFormControl = new FormControl('', Validators.required);
  nameControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regexName)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regexEmail)
  ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(public firestoreService: FirebaseService, public router: Router, public authService: AuthService, public mainVariable: MainVariableService) { }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  async onSign() {

    await this.authService.registerNewUser(this.emailFormControl.value, this.passwordFormControl.value, this.nameControl.value);
    
    this.clean();

  }

  checkAll(): boolean {
    return (
      this.nameControl.valid &&
      this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.comfirmFormControl.valid &&
      this.passwordFormControl.value?.trim() === this.comfirmFormControl.value?.trim() &&
      this.checked.value === true
    );
  }

  showPasswordOn() {
    this.showPassword = true;

  }

  clean() {
    this.showPassword = false;
    this.passwordVisible = false;
    this.nameControl.reset();
    this.emailFormControl.reset();
    this.passwordFormControl.reset();
    this.comfirmFormControl.reset();
    this.checked.reset();
  }

  checkOfWrite() {
    this.mainVariable.errorRegist = false;
  }

}
