import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'real-estate';
}
