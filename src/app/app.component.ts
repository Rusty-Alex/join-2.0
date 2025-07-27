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
 
}
