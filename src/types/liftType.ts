export type maxLiftType = {
  userId: string;
  userFullName: string;
  lift: string;
  maxWeight: string;
  weight: string;
  reps: string;
  sets: string;
};

export type liftType = {
  id?: string;
  userId: string;
  userFullName: string;
  lift: string;
  date: string;
  sets: string;
  reps: string;
  weight: string;
  unit: string;
  created_at?: string;
  updated_at?: string;
};
