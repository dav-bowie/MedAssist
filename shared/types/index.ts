export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Provider {
  id: string;
  name: string;
  specialty: string;
  location: string;
  npi: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  userId: string;
  providerId: string;
}

export interface Appointment {
  id: string;
  date: string;
  userId: string;
  providerId: string;
  insuranceId?: string;
}

export interface Insurance {
  id: string;
  provider: string;
  policyNumber: string;
  userId?: string;
} 