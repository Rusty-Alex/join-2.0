import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../../../environments/environment';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, doc, setDoc, getDoc, getFirestore, updateDoc, collection, getDocs, query, where, onSnapshot, addDoc, deleteDoc, arrayRemove, arrayUnion, serverTimestamp, orderBy, writeBatch } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  public firestore: Firestore;
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
  }
  async saveUserToFirestore(user: any,) {
    const usersCollection = collection(this.firestore, 'users');
    const userRef = doc(usersCollection, user.uid);
    try {      
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        createdAt: new Date()
      });

    } catch (error) {
      console.error('Error saving user to Firestore:', error);
    }
  }

  async loadUserData(uid: string) {
    const userRef = doc(this.firestore, 'users', uid);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      return null;
    }
  }

}
