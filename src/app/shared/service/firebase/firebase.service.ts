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

   async loadData() {
      const userRef = collection(this.firestore, 'test');     
    try {
      const querySnapshot = await getDocs(userRef);
      const users = querySnapshot.docs.map(doc => ({
        ...doc.data()
      }));
      
      return users;
    } catch (error) {
      console.error('Error fetching users from Firestore:', error);
      throw error;
    }
  
  }
}
