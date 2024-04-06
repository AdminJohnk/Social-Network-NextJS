import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { withIntl } from '@/middlewares/withIntl';
import { withAuthentication } from '@/middlewares/withAuthentication';

// export default stackMiddlewares([withAuthentication, withIntl]);
export default function middleware() {}


export const config = {
  matcher: [
    '/',
    '/(en|vi|cn)/:path*',
    '/login',
    '/register',
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/(.+)'
  ]
};
