import { ChangeEvent } from "react";
import { Session as NextAuthSession } from 'next-auth';

export interface Session extends NextAuthSession {
  userId?: number;
  expires: string;
  sessionToken: string;
  accessToken: string;
}

export type Question = {
    category: string;
    id: number;
    text: string;
  };

export type Points = {
  [key: string]: number;
};

  
export type Props = {
    children: React.ReactNode;
    stateVariabel: string;
    questions: Question[];
    user: any;
  };
  
export  type Answer = {
  [questionId: string]: string;
  };


export type FormValues = {
  name: string;
  age: string;
  gender: string;
  profession: string;
  educationLevel: string;
};

export type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export type Classifications = {
  [key: string]: "low" | "medium" | "high" | any
};