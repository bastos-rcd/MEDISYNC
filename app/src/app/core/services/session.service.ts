import { Injectable, computed, signal } from '@angular/core';
import { UserModels } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  currentUser = signal<UserModels | null>({
    id: 1,
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean@mailpro.com',
    password: 'password',
    role: 'MANAGER',
    leaveBalance: 0,
    workingTime: 35,
    createdAt: new Date(),
    job: {
      id: 1,
      name: 'Médecin',
    },
  });
  isManager = computed(() => this.currentUser()?.role === 'MANAGER');
}
