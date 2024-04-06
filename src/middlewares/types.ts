import { NextMiddlewareWithAuth } from 'next-auth/middleware';
import { NextMiddleware, NextRequest } from 'next/server';

export type MiddlewareFactory = (
  middleware: NextMiddleware | NextMiddlewareWithAuth,
  request?: NextRequest
) => NextMiddleware | NextMiddlewareWithAuth;
