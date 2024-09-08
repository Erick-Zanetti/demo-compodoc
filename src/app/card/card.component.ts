import { Component, Input } from '@angular/core';

/**
 * # Card Component
 * 
 * This component is used to display content inside a card layout. 
 * You can customize the title and content of the card using input properties.
 * 
 * ## Features
 * - **Custom Title:** Set the title of the card.
 * - **Custom Content:** Set the content inside the card.
 * - **Responsive Design:** Adjusts to fit different screen sizes.
 * 
 * ## Usage
 * ```html
 * <app-card title="Card Title" content="Card content goes here"></app-card>
 * ```
 * 
 * ## Inputs
 * | Property | Type   | Description             |
 * |----------|--------|-------------------------|
 * | `title`  | string | The title of the card.  |
 * | `content`| string | The main content inside the card. |
 * 
 * ## Author
 * Developed by [Your Name](https://github.com/yourprofile).
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  /** 
   * The title of the card.
   */
  @Input() title: string = 'Default Card Title';

  /** 
   * The main content inside the card.
   */
  @Input() content: string = 'Default card content.';
}
