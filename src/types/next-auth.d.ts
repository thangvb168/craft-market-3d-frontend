import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface IUser {
  _id: string;
  name: string;
  email: string;
  status: string;
  role: string;
}
declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    refresh_token: string;
    user: IUser;
    access_expire: number;
    error: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: IUser;
    access_token: string;
    refresh_token: string;
    access_expire: number;
    error: string;
  }
}
