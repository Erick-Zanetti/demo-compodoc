import { Component } from '@angular/core';

/**
 * Footer component that displays copyright information.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /** Text displayed in the footer */
  copyright = '© 2024 Demo Application';
}
