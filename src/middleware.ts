import { stackMiddlewares } from '@/middlewares/stackMiddlewares';
import { withIntl } from '@/middlewares/withIntl';
import { withAuthentication } from '@/middlewares/withAuthentication';

export default stackMiddlewares([withAuthentication, withIntl]);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
