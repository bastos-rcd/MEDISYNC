import { UserModels } from '@/app/core/models/user.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  user = input.required<UserModels>();
}
