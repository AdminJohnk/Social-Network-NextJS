import NextAuth, { type Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

import { UserLogin } from '@/types/users.type';
import { authService } from '@/services/AuthService';
import { IResponse } from '@/types';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials) {
          const { data }: { data: IResponse<UserLogin> } = await authService.login({
            email: credentials.email,
            password: credentials.password
          });

          // res.status === 200
          if (data) {
            const tokens = data.metadata.tokens;
            const user = data.metadata.user;
            return {
              id: user._id,
              email: user.email,
              access_token: tokens.accessToken,
              refresh_token: tokens.refreshToken
            };
          } else {
            throw new Error('Internal Server Error!');
          }
        } else {
          throw new Error('No credentials provided');
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      profile: async (profile) => {
        if (profile) {
          const { data }: { data: IResponse<UserLogin> } = await authService.loginWithGoogle(profile);

          if (data) {
            return {
              id: data.metadata.user._id,
              email: data.metadata.user.email,
              access_token: data.metadata.tokens.accessToken,
              refresh_token: data.metadata.tokens.refreshToken
            };
          } else {
            throw new Error('Internal Server Error!');
          }
        } else {
          throw new Error('No profile provided');
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      profile: async (profile, tokens) => {
        if (profile) {
          const { data }: { data: IResponse<UserLogin> } = await authService.loginWithGithub({...profile,
            accessTokenGitHub: tokens.accessToken
          });

          if (data) {
            return {
              id: data.metadata.user._id,
              access_token_github: data.metadata.accessTokenGithub,
              email: data.metadata.user.email,
              access_token: data.metadata.tokens.accessToken,
              refresh_token: data.metadata.tokens.refreshToken
            };
          } else {
            throw new Error('Internal Server Error!');
          }
        } else {
          throw new Error('No profile provided');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (user) {
        return { ...token, ...user, ...session };
      }
      if (trigger === 'update' && session) {
        return { ...token, ...session };
      }
      return token;
    },
    async session({ token }) {
      return token as unknown as Session;
    }
  },
  pages: {
    signIn: '/login'
  }
});

export { handler as GET, handler as POST };
