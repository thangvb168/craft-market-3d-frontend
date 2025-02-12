import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { InactiveUserError, InvalidEmailPasswordError } from '@/utils/errors';
import { sendRequest } from '@/utils/api';
import { IUser } from '@/types/next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await sendRequest<IBackendRes<ILogin>>({
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
          body: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        if (res.statusCode === 201) {
          return {
            _id: res.data?._id,
            name: res.data?.name,
            email: res.data?.email,
            status: res.data?.status,
            role: res.data?.role,
          };
        } else if (
          +res.statusCode === 400 ||
          (+res.statusCode === 401 && res.message === 'Invalid credentials')
        ) {
          throw new InvalidEmailPasswordError();
        } else if (+res.statusCode === 401) {
          throw new InactiveUserError();
        } else {
          throw new Error('Internal server error');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user as IUser;
      }
      return token;
    },
    session({ session, token }) {
      (session.user as IUser) = token.user;
      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
