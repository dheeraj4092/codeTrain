import { Request } from 'express';

export interface UserPayload {
  userId: number;
}

export interface RequestWithUser extends Request {
  user?: UserPayload;
}
