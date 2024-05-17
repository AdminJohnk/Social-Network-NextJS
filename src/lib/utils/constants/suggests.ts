import { ReactRenderer } from '@tiptap/react';
import tippy, { GetReferenceClientRect, Instance } from 'tippy.js';

import {
  ISuggestionListHandle,
  ISuggestionListProps,
  SuggestionList
} from '@/components/ui/suggestions-list';
import { SuggestionOptions } from '@/types';

interface ISuggestions {
  data?: string[];
  char?: string;
}

export const suggestions = ({ data = [], char = '#' }: ISuggestions): SuggestionOptions => ({
  char,
  items: ({ query }) => {
    const filteredData = data
      .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5);
    return filteredData.length > 0 ? filteredData : [query];
  },
  render: () => {
    let component: ReactRenderer<ISuggestionListHandle, ISuggestionListProps>;
    let popup: Instance[];

    return {
      onStart: (props) => {
        component = new ReactRenderer(SuggestionList, {
          props,
          editor: props.editor
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect as GetReferenceClientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start'
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect as GetReferenceClientRect
        });
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props) ?? false;
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      }
    };
  }
});
