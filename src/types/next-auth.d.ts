import  { DefaultUser, DefaultSession, JWT as DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    id: string;
    email: string;
    picture: string;
    access_token: string;
    refresh_token: string;
    repos_url?: string;
    user_github_name?: string;
    user_github_link?: string;
  }
  interface User extends DefaultUser {
    id: string;
    email: string;
    access_token: string;
    refresh_token: string;
    repos_url?: string;
    user_github_name?: string;
    user_github_link?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    access_token: string;
    access_token_expiry: number;
    refresh_token: string;
    error: string;
  }
}
