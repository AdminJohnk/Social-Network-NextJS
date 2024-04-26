'use client';

import { useEffect, useState } from 'react';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Youtube } from '@tiptap/extension-youtube';
import { EditorOptions, useEditor } from '@tiptap/react';
import { Link } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Highlight } from '@tiptap/extension-highlight';
import { lowlight } from 'lowlight';

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

export const useCustomEditor = ({ content, extensions = [], ...props }: Partial<EditorOptions>) => {
  const editor = useEditor(
    {
      content,
      extensions: [
        StarterKit.configure({
          codeBlock: false
        }),
        Underline,
        Link,
        Placeholder,
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
