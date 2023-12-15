export interface CreatePositionProps {
  name: string;
  description?: string;
  salaryPerHour: number;
}

export interface UpdatePositionProps {
  name?: string;
  description?: string;
  salaryPerHour?: number;
}
