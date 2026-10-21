import { Component, computed, signal } from '@angular/core';
import { Button } from '@/app/shared/components/button/button';

@Component({
  selector: 'app-planning',
  imports: [Button],
  templateUrl: './planning.html',
  styleUrl: './planning.css',
})
export class Planning {
  currentFilter = signal<'Toutes' | 'PENDING' | 'ACCEPTED' | 'DENIED'>('Toutes');
  /*   filteredLeaves = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'Toutes') {
      return this.leaves;
    }
    return this.leaves.filter((leave) => leave.status === filter);
  }); */
}
