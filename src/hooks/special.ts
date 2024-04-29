'use client';

import { useCallback, useEffect, useState } from 'react';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Youtube } from '@tiptap/extension-youtube';
import { EditorOptions, useEditor } from '@tiptap/react';
import { Link } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { useTranslations } from 'next-intl';
import { Highlight } from '@tiptap/extension-highlight';
import { createLowlight, common } from 'lowlight';

const lowlight = createLowlight(common);

/**
 * The `useDebounce` function is a custom hook in TypeScript that returns a debounced value based on
 * the input value and delay.
 * @param {T} value - The value that you want to debounce. This can be of any type (T).
 * @param {number} delay - The `delay` parameter is the amount of time in milliseconds that the value
 * should be debounced for. It determines how long the code should wait after the value changes before
 * updating the debounced value.
 * @returns The `useDebounce` function returns the debounced value of the input `value`.
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * The `useCustomEditor` function in TypeScript is a custom editor hook that initializes an editor with
 * specified extensions and content.
 */
export const useCustomEditor = ({ content, extensions = [], ...props }: Partial<EditorOptions>) => {
  const t = useTranslations();

  const editor = useEditor(
    {
      content,
      extensions: [
        StarterKit.configure({
          codeBlock: false
        }),
        Underline,
        Link,
        Placeholder.configure({
          placeholder: t('What do you have in mind?')
        }),
        Youtube.configure({
          width: 440,
          height: 300,
          ccLanguage: 'en'
        }),
        Highlight,
        CodeBlockLowlight.configure({ lowlight })
      ].concat(extensions),
      ...props
    },
    []
  );

  useEffect(() => {
    if (editor && content) editor.commands.setContent(content);
  }, [content]);

  return editor;
};

/**
 * The `useDragScroll` function in TypeScript allows for dragging and scrolling within a specified HTML
 * element.
 * @returns The `useDragScroll` custom hook is returning an array containing a single function `ref`,
 * which is used to set the reference to the DOM node that will have the drag scroll functionality
 * applied to it.
 */
export const useDragScroll = (): [(nodeEle: HTMLElement | null) => void] => {
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((nodeEle: HTMLElement | null) => {
    setNode(nodeEle);
  }, []);

  const setCursor = (ele: HTMLElement, cursor: string, userSelect: string) => {
    ele.style.cursor = cursor;
    ele.style.userSelect = userSelect;
  };

  const handleEvent = useCallback(
    (isTouch: boolean) => (e: MouseEvent | TouchEvent) => {
      const point = isTouch ? (e as TouchEvent).touches[0] : (e as MouseEvent);
      const startPos = {
        left: node!.scrollLeft,
        top: node!.scrollTop,
        x: point.clientX,
        y: point.clientY
      };

      const handleMove = (e: MouseEvent | TouchEvent) => {
        const point = isTouch ? (e as TouchEvent).touches[0] : (e as MouseEvent);
        const dx = point.clientX - startPos.x;
        const dy = point.clientY - startPos.y;
        node!.scrollTop = startPos.top - dy;
        node!.scrollLeft = startPos.left - dx;
        setCursor(node!, 'grabbing', 'none');
      };

      const handleEnd = () => {
        document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleMove);
        document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleEnd);
        setCursor(node!, 'grab', '');
      };

      document.addEventListener(
        isTouch ? 'touchmove' : 'mousemove',
        handleMove,
        isTouch ? { passive: true } : undefined
      );
      document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleEnd);
    },
    [node]
  );

  useEffect(() => {
    if (!node) {
      return;
    }
    node.addEventListener('mousedown', handleEvent(false));
    node.addEventListener('touchstart', handleEvent(true));
    return () => {
      node.removeEventListener('mousedown', handleEvent(false));
      node.removeEventListener('touchstart', handleEvent(true));
    };
  }, [node]);

  return [ref];
};
