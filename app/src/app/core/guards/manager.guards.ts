import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

export const managerGuard = () => {
  const session = inject(SessionService);
  const router = inject(Router);

  if (session.isManager()) {
    return true;
  } else {
    return router.navigate(['/planning']);
  }
};
