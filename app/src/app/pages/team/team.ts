import { UserModels } from '@/app/core/models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
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
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
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
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
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
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
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
      firstName: 'John',
      lastName: 'Doe',
      email: 'jonhdoa@mailpro.com',
      password: 'password',
      role: 'WORKER',
      leaveBalance: 0,
      workingTime: 35,
      createdAt: new Date(),
      job: {
        id: 1,
        name: 'Administrateur',
      },
    },
  ];
}
