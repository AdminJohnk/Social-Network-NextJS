import Story from '@/components/Story/Story';
import * as React from 'react';

export interface INewFeedProps {}

export default function NewFeed(props: INewFeedProps) {
  return (
    <div className='newfeed'>
      <Story />
    </div>
  );
}
