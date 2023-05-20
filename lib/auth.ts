import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { Request } from 'express';
import { sign, verify } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

interface User {
  id: number;
  email: string;
  password: string;
}

interface DecodedToken {
  userId: number;
}

export const registerUser = async (email: string, password: string): Promise<User> => {
  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const loginUser = async (email: string, password: string): Promise<string> => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }

  const token = sign({ userId: user.id }, process.env.JWT_SECRET as string);

  return token;
};

export const verifyToken = (req: Request): DecodedToken => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('No token provided');
  }

  const token = authHeader.split(' ')[1];

  const decoded = verify(token, process.env.JWT_SECRET as string) as DecodedToken;

  return decoded;
};