import { Component } from '@angular/core';
import { KpiCard } from '@/app/shared/components/kpi-card/kpi-card';
import { LeaveCard } from '@/app/shared/components/leave-card/leave-card';
import { AlertsCard } from '@/app/shared/components/alerts-card/alerts-card';
import { LeaveModels } from '@/app/core/models/leave.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, LeaveCard, AlertsCard, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  leaves: LeaveModels[] = [
    {
      id: 1,
      user: {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        job: { id: 1, name: 'Infirmier' },
        email: '',
        password: '',
        role: 'MANAGER',
        leaveBalance: 0,
        workingTime: 0,
        createdAt: new Date(),
      },
      startDate: '15/01/2027',
      endDate: '01/02/2027',
      type: 'HOLIDAYS',
      reason: 'Vacances',
      status: 'PENDING',
    },
    {
      id: 2,
      user: {
        id: 2,
        firstName: 'Jean',
        lastName: 'Dupont',
        job: { id: 1, name: 'Infirmier' },
        email: '',
        password: '',
        role: 'WORKER',
        leaveBalance: 0,
        workingTime: 0,
        createdAt: new Date(),
      },
      startDate: '15/01/2027',
      endDate: '01/02/2027',
      type: 'HOLIDAYS',
      reason: 'Vacances',
      status: 'PENDING',
    },
    {
      id: 3,
      user: {
        id: 3,
        firstName: 'Jean',
        lastName: 'Dupont',
        job: { id: 1, name: 'Infirmier' },
        email: '',
        password: '',
        role: 'WORKER',
        leaveBalance: 0,
        workingTime: 0,
        createdAt: new Date(),
      },
      startDate: '15/01/2027',
      endDate: '01/02/2027',
      type: 'HOLIDAYS',
      reason: 'Vacances',
      status: 'ACCEPTED',
    },
    {
      id: 4,
      user: {
        id: 4,
        firstName: 'Jean',
        lastName: 'Dupont',
        job: { id: 1, name: 'Infirmier' },
        email: '',
        password: '',
        role: 'WORKER',
        leaveBalance: 0,
        workingTime: 0,
        createdAt: new Date(),
      },
      startDate: '15/01/2027',
      endDate: '01/02/2027',
      type: 'HOLIDAYS',
      reason: 'Vacances',
      status: 'PENDING',
    },
    {
      id: 5,
      user: {
        id: 5,
        firstName: 'Jean',
        lastName: 'Dupont',
        job: { id: 1, name: 'Infirmier' },
        email: '',
        password: '',
        role: 'WORKER',
        leaveBalance: 0,
        workingTime: 0,
        createdAt: new Date(),
      },
      startDate: '15/01/2027',
      endDate: '01/02/2027',
      type: 'HOLIDAYS',
      reason: 'Vacances',
      status: 'PENDING',
    },
  ];
}
