import { NextMiddleware, NextResponse } from 'next/server';
import { MiddlewareFactory } from './types';
import { NextMiddlewareWithAuth } from 'next-auth/middleware';

export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware | NextMiddlewareWithAuth {
  const current = functions[index];
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
