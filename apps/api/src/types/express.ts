import { Request, Response } from 'express';

declare global {
  namespace Express {
    interface User extends UserPayload {}
  }

  interface PublicRequest extends Request {
    user: undefined;
  }

  interface PublicResponse extends Response {}

  interface AuthRequest extends Request {
    user: Express.User;
  }

  interface AuthResponse extends Response {}
}
