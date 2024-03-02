import { protect_route } from '@/configs/auth.config';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useAuth(shouldRedirect: boolean) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({
        callbackUrl: `/api/auth/signin?callbackUrl=${pathname}`,
        redirect: protect_route.includes(pathname) ? shouldRedirect : false
      });
    }

    if (session !== undefined || session !== null) {
      if (pathname === '/api/auth/signin') {
        router.replace('/');
      }
      setIsAuthenticated(true);
    }
  }, [pathname, router, session, shouldRedirect]);

  return isAuthenticated;
}
