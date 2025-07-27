import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../../../environments/environment';
import { Auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signInAnonymously, signOut, User,   onAuthStateChanged, confirmPasswordReset, verifyPasswordResetCode, getAdditionalUserInfo, applyActionCode, reload } from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private app: FirebaseApp;
public auth: Auth;
public user: User | null = null;
  constructor( public firestoreService: FirebaseService) {    
  
this.app = initializeApp(firebaseConfig);
this.auth = getAuth(this.app);

onAuthStateChanged(this.auth, (user) => {
      this.user = user;      
      // if (user) {
      //   if (user.emailVerified) {
      //     this.firestoreService.fetchUserFromFirestore(user.uid).then(userData => {
      //       this.router.navigate(['/dashboard']);
      //     });
      //   }
      // }
    });
  }
  // async registerWithEmail(email: string, password: string, displayName: string, profile: string): Promise<void> {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
  //     const user = userCredential.user;
  //     await updateProfile(user, { displayName });
  //     await this.sendVerification();
  //     this.firestoreService.saveUserToFirestore(user, profile);
  //   } catch (error: any) {
  //     console.error('Registration error: ', error);
  //     switch (error.code) {
  //       case 'auth/email-already-in-use':
  //         return Promise.reject('Dieser Benutzer existiert bereits.');
  //       default:
  //         return Promise.reject('Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.');
  //     }
  //   }
  // }
}


