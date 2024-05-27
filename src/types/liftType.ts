export type TMyLog = {
  id: string;
  date: string;
  lift: string;
  weight: unknown;
  reps: string;
  sets: string;
};

export type TLiftLog = {
  userId: string;
  userFullName: string;
  lift: string;
  maxWeight: unknown;
  reps: string;
  sets: string;
};

export type TLiftType = {
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
