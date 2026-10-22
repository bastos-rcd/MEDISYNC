import { Component, computed, inject, signal } from '@angular/core';
import { Button } from '@/app/shared/components/button/button';
import { SessionService } from '@/app/core/services/session.service';
import { JobModels } from '@/app/core/models/job.model';

@Component({
  selector: 'app-planning',
  imports: [Button],
  templateUrl: './planning.html',
  styleUrl: './planning.css',
})
export class Planning {
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
  currentFilter = signal<'Toutes' | 'PENDING' | 'ACCEPTED' | 'DENIED'>('Toutes');
  session = inject(SessionService);
  addUserModal = signal<boolean>(false);
  addUser = () => {
    this.addUserModal.set(true);
  };
  /*   filteredLeaves = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'Toutes') {
      return this.leaves;
    }
    return this.leaves.filter((leave) => leave.status === filter);
  }); */
}
