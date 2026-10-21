import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alerts-card',
  imports: [],
  templateUrl: './alerts-card.html',
  styleUrl: './alerts-card.css',
})
export class AlertsCard {
  bgColor = input<string>();
  iconColor = input<string>();
}
