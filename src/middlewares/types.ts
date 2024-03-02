import { NextMiddlewareWithAuth } from 'next-auth/middleware';
import { NextMiddleware } from 'next/server';

export type MiddlewareFactory = (
  middleware: NextMiddleware | NextMiddlewareWithAuth
) => NextMiddleware | NextMiddlewareWithAuth;
