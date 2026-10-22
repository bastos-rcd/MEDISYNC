import { Component, computed, inject, signal } from '@angular/core';
import { LeaveModels } from '@/app/core/models/leave.model';
import { LeaveCard } from '@/app/shared/components/leave-card/leave-card';
import { KpiCard } from '@/app/shared/components/kpi-card/kpi-card';
import { Button } from '@/app/shared/components/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SessionService } from '@/app/core/services/session.service';

@Component({
  selector: 'app-leave',
  imports: [LeaveCard, KpiCard, Button, ReactiveFormsModule, DatePipe],
  templateUrl: './leave.html',
  styleUrl: './leave.css',
})
export class Leave {
  session = inject(SessionService);
  today = new Date();
  currentFilter = signal<'Toutes' | 'PENDING' | 'ACCEPTED' | 'DENIED'>('Toutes');
  leaveType = signal<string>('HOLIDAYS');
  form = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.log(this.form.value);
  }
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
      status: 'DENIED',
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
  filteredLeaves = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'Toutes') {
      return this.leaves;
    }
    return this.leaves.filter((leave) => leave.status === filter);
  });
}
