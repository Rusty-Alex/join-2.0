import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignComponent } from './pages/sign/sign.component';
import { WelcomeDaschboardComponent } from './pages/welcomeDashboard/welcome-daschboard/welcome-daschboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignComponent
  },

  {
    path: 'welcome',
    component: WelcomeDaschboardComponent
  }


];
