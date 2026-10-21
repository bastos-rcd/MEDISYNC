import { Component, input } from '@angular/core';
import { LeaveModels } from '../../../core/models/leave.model';

@Component({
  selector: 'app-leave-card',
  imports: [],
  templateUrl: './leave-card.html',
  styleUrl: './leave-card.css',
})
export class LeaveCard {
  leave = input.required<LeaveModels>();

  onClickAccept = () => {
    this.leave().status = 'ACCEPTED';
  };

  onClickRefuse = () => {
    this.leave().status = 'DENIED';
  };
}
