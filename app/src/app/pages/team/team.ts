import { JobModels } from '@/app/core/models/job.model';
import { UserModels } from '@/app/core/models/user.model';
import { SessionService } from '@/app/core/services/session.service';
import { Button } from '@/app/shared/components/button/button';
import { TeamCard } from '@/app/shared/components/team-card/team-card';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [Button, TeamCard],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  session = inject(SessionService);
  jobs: JobModels[] = [
    { id: 1, name: 'Administrateur' },
    { id: 2, name: 'Médecin' },
    { id: 3, name: 'Infirmier' },
    { id: 4, name: 'Aide-soignant' },
    { id: 5, name: 'Physiothérapeute' },
    { id: 6, name: 'Ergothérapeute' },
    { id: 7, name: 'Podologue' },
    { id: 8, name: 'Secrétaire' },
    { id: 9, name: 'Magasinier' },
    { id: 10, name: 'Chauffeur' },
  ];
  users: UserModels[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'MANAGER',
      leaveBalance: 0,
      workingTime: 35,
      createdAt: new Date(),
      job: {
        id: 1,
        name: 'Administrateur',
      },
    },
    {
      id: 1,
      firstName: 'Jeanne',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
      leaveBalance: 0,
      workingTime: 35,
      createdAt: new Date(),
      job: {
        id: 2,
        name: 'Médecin',
      },
    },
    {
      id: 1,
      firstName: 'Paul',
      lastName: 'Polo',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
      leaveBalance: 0,
      workingTime: 35,
      createdAt: new Date(),
      job: {
        id: 3,
        name: 'Infirmier',
      },
    },
    {
      id: 1,
      firstName: 'Didier',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
      leaveBalance: 0,
      workingTime: 35,
      createdAt: new Date(),
      job: {
        id: 4,
        name: 'Aide-soignant',
      },
    },
    {
      id: 1,
      firstName: 'Thierry',
      lastName: 'Lebrun',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
      leaveBalance: 0,
      workingTime: 28,
      createdAt: new Date(),
      job: {
        id: 5,
        name: 'Physiothérapeute',
      },
    },
  ];
  addUserModal = signal<boolean>(false);
  editUserModal = signal<boolean>(false);
  deleteUserModal = signal<boolean>(false);

  selectedUser = signal<UserModels | null>(null);

  addUser = () => {
    this.addUserModal.set(true);
  };
  editUser = (selectedUser: UserModels) => {
    this.selectedUser.set(selectedUser);
    this.editUserModal.set(true);
  };
  deleteUser = (selectedUser: UserModels) => {
    this.selectedUser.set(selectedUser);
    this.deleteUserModal.set(true);
  };
  modifyUser = () => {};
}
