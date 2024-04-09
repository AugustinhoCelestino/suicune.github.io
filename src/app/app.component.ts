import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class AppComponent {
  title = 'suicune';
}
