'use client';

import { useEffect, useState } from 'react';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Youtube } from '@tiptap/extension-youtube';
import { EditorOptions, useEditor } from '@tiptap/react';
import { Link } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Image } from '@tiptap/extension-image';
import { useTranslations } from 'next-intl';
import { Highlight } from '@tiptap/extension-highlight';

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
export const useCustomEditor = ({
  content,
  placeholder,
  extensions = [],
  ...props
}: Partial<EditorOptions> & { placeholder?: string }) => {
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
          placeholder: placeholder || t('What do you have in mind?')
        }),
        Youtube.configure({
          width: 440,
          height: 300,
          ccLanguage: 'en',
          addPasteHandler: false
        }),
        Highlight,
        Image,
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
