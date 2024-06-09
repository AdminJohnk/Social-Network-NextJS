import { TabsContent } from '@/components/ui/tabs';
import TimelineTab from './TimelineTab';
import FriendTab from './FriendTab';
import SeriesTab from './SeriesTab';
import PhotoTab from './PhotoTab';
import RepositoryTab from './RepositoryTab';

export interface IContentProps {
  profileID: string;
}

export default function Content({ profileID }: IContentProps) {
  return (
    <TabsContent id='tabs-profile' className='!border-none'>
      <TimelineTab profileID={profileID} />
      <FriendTab profileID={profileID} />
      <SeriesTab profileID={profileID} />
      <PhotoTab profileID={profileID} />
      <RepositoryTab profileID={profileID} />
    </TabsContent>
  );
}
