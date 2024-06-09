import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextResponse, NextRequest } from 'next/server';

import { LIST_LANGUAGE } from '@/lib/utils/constants/SettingSystem';
import { MiddlewareFactory } from './types';

export const withAuthentication: MiddlewareFactory =
  (next) => async (req: NextRequest, _next: NextFetchEvent) => {
    return withAuth(
      async function middleware(req) {
        const token = await getToken({ req });
        const isAuth = !!token;

        const locale = LIST_LANGUAGE.map((lang) => lang).join('|');

        const isAuthPage = req.nextUrl.pathname.match(
          new RegExp(`\/((${locale})\/)?(login|register|forgot-password|verify|reset-password)`)
        );

        if (isAuthPage) {
          if (isAuth) {
            return NextResponse.redirect(new URL('/', req.url));
          }

          return next(req, _next);
        }

        if (!isAuth) {
          let from = req.nextUrl.pathname;

          if (req.nextUrl.search) {
            from += req.nextUrl.search;
          }

          return NextResponse.redirect(new URL(`/login?callbackUrl=${encodeURIComponent(from)}`, req.url));
        }

        return next(req, _next);
      },
      {
        callbacks: {
          authorized: () => {
            return true;
          }
        }
      }
    )(req as any, _next);
  };
