import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration: 'true'},
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppComponent {
  title = 'suicune';
}
