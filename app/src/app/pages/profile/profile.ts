import { JobModels } from '@/app/core/models/job.model';
import { SessionService } from '@/app/core/services/session.service';
import { Button } from '@/app/shared/components/button/button';
import { KpiCard } from '@/app/shared/components/kpi-card/kpi-card';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [KpiCard, Button],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  session = inject(SessionService);
  editUserModal = signal<boolean>(false);
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
  editUser = () => {
    this.editUserModal.set(true);
  };
}
