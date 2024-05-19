'use client';

import { useCurrentUserInfo } from '@/hooks/query';
import { useRouter } from '@/navigation';

export default function MeProfile() {
  const { currentUserInfo } = useCurrentUserInfo();
  const router = useRouter();

  router.replace(`/profile/${currentUserInfo._id}`);
}
