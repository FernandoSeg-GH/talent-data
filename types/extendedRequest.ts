import { Request } from 'express';

interface ExtendedRequest extends Request {
  user?: {
    role: string;
    userId: number;
  };
}

export default ExtendedRequest;
