import { Component } from '@angular/core';

/**
 * Header component that displays the application title.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /** Title displayed in the header */
  title = 'Compodoc Demo Application';
}
