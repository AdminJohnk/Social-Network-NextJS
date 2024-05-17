'use client';

import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { cn } from '@/lib/utils';
import { OnKeyDownProps } from '@/types';

export interface ISuggestionListProps {
  items: string[];
  command: (options: { id: string }) => void;
  query: string;
}

export interface ISuggestionListHandle {
  onKeyDown: (props: OnKeyDownProps) => boolean;
}

const SuggestionList = forwardRef<ISuggestionListHandle, ISuggestionListProps>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item });
    } else {
      props.command({ id: props.query });
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        enterHandler();
        return true;
      }

      return false;
    }
  }));

  return (
    <div className='bg-foreground-1 rounded-lg shadow-lg text-text-1 overflow-hidden p-1 relative'>
      {props.items.length > 0 ? (
        props.items.map((item, index) => (
          <button
            key={index}
            className={cn(
              'bg-transparent rounded-md block m-0 px-1 py-2 text-left w-full hover:bg-hover-1',
              index === selectedIndex && 'bg-hover-2'
            )}
            onClick={() => selectItem(index)}>
            {item}
          </button>
        ))
      ) : (
        <div className='bg-transparent rounded-md block m-0 px-1 py-2 text-left w-full'>No result</div>
      )}
    </div>
  );
});

SuggestionList.displayName = 'SuggestionList';

export { SuggestionList };
