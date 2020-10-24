import mongoose from 'mongoose';

export interface Organizationnterface extends mongoose.Document {
  // slug: string;
  // name: string;
  // logoUrl: string;
  // objective: string;
  // description: string;
  // sponsors: string;

  createdAt?: string;
  updatedAt?: string;
}
