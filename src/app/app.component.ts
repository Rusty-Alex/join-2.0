import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './shared/service/firebase/firebase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public firestoreService: FirebaseService) {}
 async test() {
    const test = await this.firestoreService.loadData();
    console.log('daten von Firebase', test);
  }
}
