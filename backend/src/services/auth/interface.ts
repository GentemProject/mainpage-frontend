import mongoose from 'mongoose';

export interface JwtToken {
  userId: string;
}

export interface RefreshTokenInterface extends mongoose.Document {
  token: string;
  createdAt?: string;
}
