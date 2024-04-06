import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { MiddlewareFactory } from './types';

export const withAuthentication: MiddlewareFactory = (next) =>
  withAuth(
    async function middleware(req) {
      const token = await getToken({ req });

      const isAuth = !!token;

      const path = req.nextUrl.pathname.split('/')[1];
      const locale = path !== 'en' ? 'en' : path;

      const isAuthPage =
        req.nextUrl.pathname.startsWith('/' + locale + '/login') ||
        req.nextUrl.pathname.startsWith('/' + locale + '/register');

      if (isAuthPage) {
        if (isAuth) {
          return NextResponse.redirect(new URL('/' + locale, req.url));
        }

        return null;
      }

      if (!isAuth) {
        let from = req.nextUrl.pathname;
        if (req.nextUrl.search) {
          from += req.nextUrl.search;
        }

        return NextResponse.redirect(
          new URL(`/${locale}/login?callbackUrl=${encodeURIComponent(from)}`, req.url)
        );
      }
    },
    {
      callbacks: {
        authorized: () => {
          return true;
        }
      }
    }
  );

// export default withAuth(
//   async function middleware(req) {
//     console.log('middleware withAuth');
//     const token = await getToken({ req });

//     const isAuth = !!token;
//     const isAuthPage =
//       req.nextUrl.pathname.startsWith('/login') ||
//       req.nextUrl.pathname.startsWith('/register');

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL('/dashboard', req.url));
//       }

//       return null;
//     }

//     if (!isAuth) {
//       let from = req.nextUrl.pathname;
//       if (req.nextUrl.search) {
//         from += req.nextUrl.search;
//       }

//       return NextResponse.redirect(
//         new URL(`/login?callbackUrl=${encodeURIComponent(from)}`, req.url)
//       );
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         return true;
//       }
//     }
//   }
// );
