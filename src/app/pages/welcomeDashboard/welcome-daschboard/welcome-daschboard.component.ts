import { Component } from '@angular/core';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-welcome-daschboard',
  imports: [],
  templateUrl: './welcome-daschboard.component.html',
  styleUrl: './welcome-daschboard.component.scss'
})
export class WelcomeDaschboardComponent {
  constructor(public authService: AuthService) { }
logOut(){
  this.authService.logOutUser();
}
}
