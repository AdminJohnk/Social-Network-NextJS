import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { withIntl } from '@/middlewares/withIntl';
import { withAuthentication } from '@/middlewares/withAuthentication';

export default stackMiddlewares([withAuthentication, withIntl]);
// export default function middleware() {}

export const config = {
  matcher: [
    '/:path*',
    '/(en|vi)/:path*',
    '/login',
    '/register',
  ]
};
