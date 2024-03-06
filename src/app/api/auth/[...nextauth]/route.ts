import { AppConfig } from '@/configs/app.config';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

import { IResponse } from '@/types/common.type';
import { UserLogin } from '@/types/users.type';

// async function refreshAccessToken(token: any) {
//   try {
//     // Get a new set of tokens with a refreshToken
//     const token_response = await axios.post(
//       'http://localhost:3336/auth/refresh',
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token.refresh_token}`
//         }
//       }
//     );

//     return {
//       ...token,
//       access_token: token_response.data.access_token,
//       access_token_expiry:
//         token_response.data.access_token_expiry ||
//         jwtDecode<{ exp: number }>(token_response.data.access_token).exp,
//       refresh_token: token_response.data.refresh_token
//     };
//   } catch (error) {
//     return {
//       ...token,
//       error: 'RefreshAccessTokenError'
//     };
//   }
// }

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
          const data: IResponse<UserLogin> = await axios
            .post(process.env.NEXT_PUBLIC_API_BASE + '/auth/login', {
              email: credentials.email,
              password: credentials.password
            })
            .then((res) => res.data);

          // If no error and we have user data, return it
          if (data.status !== 200) {
            if (data.status === 401) {
              throw new Error('Password is incorrect!');
            } else {
              throw new Error('Email not exists!');
            }
          }

          // res.status === 200
          if (data) {
            return {
              id: data.metadata.user.id,
              name: data.metadata.user.name,
              email: data.metadata.user.email,
              image: data.metadata.user.user_image,
              access_token: data.metadata.accessToken,
              refresh_token: data.metadata.refreshToken
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
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
      // profile: (profile, tokens) => {
      //   if (profile) {
      //     return {
      //       id: profile.sub,
      //       name: profile.firstName,
      //       lastName: profile.family_name,
      //       firstName: profile.given_name,
      //       image: profile.picture
      //     };
      //   } else {
      //     throw new Error('Login Failed');
      //   }
      // }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        if (account) {
          switch (account.provider) {
            case 'github': {
              let res;
              if (AppConfig.enableApiMockup) {
                res = {
                  status: 200,
                  data: {
                    access_token: 'mock_access_token',
                    refresh_token: 'mock_refresh_token'
                  }
                };
              } else {
                res = await axios.post(`${AppConfig.apiBase}/github-authentication`, {
                  access_token: account.access_token,
                  token_type: account.token_type
                });
              }
              token.access_token = res.data.access_token;
              token.refresh_token = res.data.refresh_token;

              return {
                ...token,
                access_token_expiry: res.data.access_token_expiry
              };
            }
            case 'google': {
              token.access_token = account.access_token!;
              token.refresh_token = account.id_token!;

              return {
                ...token,
                access_token_expiry: new Date(account.expires_at!).getTime() / 1000
              };
            }
          }
        } else {
          token.access_token = user.access_token;
          token.refresh_token = user.refresh_token;

          // Refresh the token if it's expired
          const decode_token: { exp: number; iat: number } = jwtDecode(token.access_token);
          const shouldRefreshTime = Math.round(decode_token.exp * 1000 - 30 * 60 * 1000 - Date.now());
          // If the token is still valid, just return it.
          if (shouldRefreshTime > 1000) {
            return {
              ...token,
              access_token_expiry: decode_token.exp
            };
          }
        }
      }

      // return await refreshAccessToken(token);
      return token;
    },
    async session({ session, token, user }) {
      // const sessionInfo = {
      //   user: {
      //     id: token.id,
      //     username: token.username,
      //     email: token.email,
      //     name: `${token.firstName} ${token.lastName}`,
      //     image: token.image
      //   },
      //   expires: session.expires,
      //   accessToken: token.token
      // };

      // return sessionInfo as Session;

      session.access_token = token.access_token;
      session.access_token_expiry = token.access_token_expiry;
      session.error = token.error;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
});

export { handler as GET, handler as POST };
