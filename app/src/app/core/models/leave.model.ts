import { UserModels } from './user.model';

export interface LeaveModels {
  id: number;
  startDate: Date | string;
  endDate: Date | string;
  type: 'HOLIDAYS' | 'SICKNESS' | 'OTHER';
  reason?: string;
  status: 'PENDING' | 'ACCEPTED' | 'DENIED' | 'CANCELLED';
  user?: UserModels;
}
