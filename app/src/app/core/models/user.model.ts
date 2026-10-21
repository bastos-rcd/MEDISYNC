import { JobModels } from './job.model';

export interface UserModels {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  leaveBalance: number;
  workingTime: number;
  createdAt: Date;
  job?: JobModels;
}
