'use client';

import { useOtherUserInfo } from '@/hooks/query';

export interface IPhotoTabProps {
  profileID: string;
}

export default function PhotoTab({ profileID }: IPhotoTabProps) {
  const { otherUserInfo, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);
  return <div></div>;
}
