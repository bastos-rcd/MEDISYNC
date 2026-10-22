import { UserModels } from '@/app/core/models/user.model';
import { SessionService } from '@/app/core/services/session.service';
import { Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  session = inject(SessionService);
  user = input.required<UserModels>();
  editUser = output<UserModels>();
  deleteUser = output<UserModels>();
}
