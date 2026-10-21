import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  text = input<string>();
  borderColor = input<string>();
  colorBg = input<string>();
  isSelected = input<boolean>(false);
  variant = input<'primary' | 'secondary'>();
}
