import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../../../environments/environment';
import { Auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, signOut, User, onAuthStateChanged, confirmPasswordReset, verifyPasswordResetCode, getAdditionalUserInfo, applyActionCode, reload, updateProfile } from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { FirebaseService } from '../firebase/firebase.service';
import { MainVariableService } from '../mainVariable/main-variable.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app: FirebaseApp;
  public auth: Auth;   
  constructor(public firestoreService: FirebaseService, public mainVariable: MainVariableService, public router: Router) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);

    onAuthStateChanged(this.auth, (user) => {
      
      if (user) {
        
        this.mainVariable.user = user;

        this.firestoreService.loadUserData(user.uid).then((data) => {
          this.mainVariable.user = data;
        });
          
        this.router.navigate(['/welcome']);
        
      }

       if (!user) {
    
    router.navigate(['/login']);
  }
    });
  }


  async registerNewUser(email: any, password: any, displayName: any): Promise<void> {

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName });      
      this.firestoreService.saveUserToFirestore(user);

    } catch (error: any) {

      if (error.code === 'auth/email-already-in-use') {
        console.error('Email already in use');
        this.mainVariable.errorRegist = true
      } else {
        console.error('Error creating user:', error);
      }
    }

  }

  async loginUser(email: any, password: any): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Error logging in user:', error);
      this.mainVariable.errorLogin = true;
    }
  }

  async logOutUser(){
    try {
      await signOut(this.auth);
      this.mainVariable.user = null;
    } catch (error) {
      console.error('Error logging out user:', error);
    }
  }
}


