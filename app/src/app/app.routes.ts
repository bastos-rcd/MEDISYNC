import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Planning } from './pages/planning/planning';
import { Leave } from './pages/leave/leave';
import { Team } from './pages/team/team';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'planning', component: Planning },
  { path: 'absences', component: Leave },
  { path: 'team', component: Team },
  { path: 'profile', component: Profile },
];
