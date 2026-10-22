import { Component, input, inject } from '@angular/core';
import { LeaveModels } from '../../../core/models/leave.model';
import { SessionService } from '@/app/core/services/session.service';

@Component({
  selector: 'app-leave-card',
  imports: [],
  templateUrl: './leave-card.html',
  styleUrl: './leave-card.css',
})
export class LeaveCard {
  leave = input.required<LeaveModels>();
  session = inject(SessionService);

  onClickAccept = () => {
    this.leave().status = 'ACCEPTED';
  };

  onClickRefuse = () => {
    this.leave().status = 'DENIED';
  };
}
