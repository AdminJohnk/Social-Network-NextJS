'use client';

import { useCallback, useEffect, useState } from 'react';
import { useThemeMode } from 'flowbite-react';
import { Editor as EditorProps, EditorContent, FocusPosition } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdHorizontalRule,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatUnderlined,
  MdLink
} from 'react-icons/md';
import { VscHorizontalRule } from "react-icons/vsc";
import { FaUndo, FaRedo, FaYoutube, FaPen, FaFileImage } from 'react-icons/fa';
import { FiAlignCenter } from 'react-icons/fi';
import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { IoCodeSlashOutline, IoHappy } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import Picker from '@emoji-mart/react';
import { CircularProgress } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';

import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import Popover from '@/components/ui/popover-v2';
import { useCustomEditor } from '@/hooks/special';
import { cn } from '@/lib/utils';
import { IEmoji } from '@/types';

const MenuBar = ({ editor }: { editor: EditorProps }) => {
  const t = useTranslations();
  const locale = useLocale();
  const [typeNumber, setTypeNumber] = useState(0);
  const { mode } = useThemeMode();

  const selectTypeNumber = useCallback(() => {
    if (editor.isActive('paragraph')) {
      setTypeNumber(0);
    } else if (editor.isActive('heading', { level: 1 })) {
      setTypeNumber(1);
    } else if (editor.isActive('heading', { level: 2 })) {
      setTypeNumber(2);
    } else if (editor.isActive('heading', { level: 3 })) {
      setTypeNumber(3);
    } else if (editor.isActive('codeBlock')) {
      setTypeNumber(4);
    } else {
      setTypeNumber(0);
    }
  }, [editor]);

  useEffect(() => {
    editor.on('selectionUpdate', () => {
      selectTypeNumber();
    });
  }, [editor]);

  const typeText = [
    {
      // Normal
      node: (
        <div className='flex-start gap-1.5'>
          <FiAlignCenter className='size-5' />
          <span>{t('Normal')}</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().setParagraph().run();
      },
      className: cn(editor.isActive('paragraph') && 'text-primary-500')
    },
    {
      // Heading 1
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading1 className='size-5' />
          <span>{t('Heading 1')}</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
      className: cn(editor.isActive('heading', { level: 1 }) && 'text-primary-500')
    },
    {
      // Heading 2
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading2 className='size-5' />
          <span>{t('Heading 2')}</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      className: cn(editor.isActive('heading', { level: 2 }) && 'text-primary-500')
    },
    {
      // Heading 3
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading3 className='size-5' />
          <span>{t('Heading 3')}</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
      className: cn(editor.isActive('heading', { level: 3 }) && 'text-primary-500')
    },
    {
      // Code Block
      node: (
        <div className='flex-start gap-1.5'>
          <IoCodeSlashOutline className='size-5' />
          <span>{t('Code Block')}</span>
        </div>
      ),
      callback: () => {
        editor.chain().focus().toggleCodeBlock().run();
      },
      className: cn(editor.isActive('codeBlock') && 'text-primary-500')
    }
  ];

  return (
    <div className='flex-start'>
      <div className='flex-start gap-1 *:px-2 *:py-1 *:text-text-1 *:select-none'>
        <Button
          variant='main'
          className='h-9 bg-transparent disabled:pointer-events-auto disabled:hover:bg-transparent'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          data-uk-tooltip={`title: ${t('Undo')}; pos: top; offset:6; delay: 300`}>
          <FaUndo className='size-4' />
        </Button>
        <Button
          variant='main'
          className='h-9 bg-transparent disabled:pointer-events-auto disabled:hover:bg-transparent'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          data-uk-tooltip={`title: ${t('Redo')}; pos: top; offset:6; delay: 300`}>
          <FaRedo className='size-4' />
        </Button>
      </div>
      <span className='mx-2'>|</span>
      <div className='flex-start gap-2 *:p-1 *:text-text-1 *:select-none'>
        <Toggle
          value='bold'
          size='sm'
          pressed={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          data-uk-tooltip={`title: ${t('Bold')}; pos: top; offset:6; delay: 300`}>
          <MdFormatBold className='size-5' />
        </Toggle>
        <Toggle
          value='italic'
          size='sm'
          pressed={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          data-uk-tooltip={`title: ${t('Italic')}; pos: top; offset:6; delay: 300`}>
          <MdFormatItalic className='size-5' />
        </Toggle>
        <Toggle
          value='underline'
          size='sm'
          pressed={editor.isActive('underline')}
          onClick={() => editor.commands.toggleUnderline()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          data-uk-tooltip={`title: ${t('Underline')}; pos: top; offset:6; delay: 300`}>
          <MdFormatUnderlined className='size-5' />
        </Toggle>
        <Toggle
          value='horizontal_rule'
          size='sm'
          pressed={editor.isActive('horizontal_rule')}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          disabled={!editor.can().chain().focus().setHorizontalRule().run()}
          data-uk-tooltip={`title: ${t('Horizon Rule')}; pos: top; offset:6; delay: 300`}>
          <MdHorizontalRule className='size-5' />
        </Toggle>
        <Toggle
          value='highlight'
          size='sm'
          pressed={editor.isActive('highlight')}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().chain().focus().toggleHighlight().run()}
          data-uk-tooltip={`title: ${t('Highlight')}; pos: top; offset:6; delay: 300`}>
          <FaPen className='size-5' />
        </Toggle>
      </div>
      <span className='mx-2'>|</span>
      <div className='flex-start gap-2 *:p-1 *:text-text-1 *:select-none'>
        {/* // Bullet List */}
        <Toggle
          value='bulletList'
          size='sm'
          pressed={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          data-uk-tooltip={`title: ${t('Bullet List')}; pos: top; offset:6; delay: 300`}>
          <MdFormatListBulleted className='size-5' />
        </Toggle>
        {/* Numbered List */}
        <Toggle
          value='orderedList'
          size='sm'
          pressed={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          data-uk-tooltip={`title: ${t('Ordered List')}; pos: top; offset:6; delay: 300`}>
          <MdFormatListNumbered className='size-5' />
        </Toggle>
      </div>
      <span className='mx-2'>|</span>
      {/* Type Text */}
      <div className='flex-start gap-2 *:p-1 *:text-text-1'>
        <button
          type='button'
          className='flex-start gap-1.5 h-9 mr-2 select-none group rounded-md hover:bg-hover-1'>
          {typeText[typeNumber].node}
          <GoChevronDown className='size-4 group-aria-expanded:rotate-180 duration-300' />
        </button>
        <div data-uk-drop='offset: 6; pos: bottom-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
          <div className='p-2 bg-foreground-1 rounded-lg shadow-lg'>
            {typeText.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'px-2.5 py-2 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close',
                  item.className
                )}
                onClick={() => {
                  item.callback();
                  selectTypeNumber();
                }}>
                {item.node}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex-start gap-2 *:p-1 *:text-text-1 *:select-none *:cursor-pointer hover:*:bg-hover-1 *:rounded-md *:h-9'>
        {/* Link */}
        <Toggle
          value='link'
          size='sm'
          pressed={editor.isActive('link')}
          onClick={() => {
            if (editor.isActive('link')) {
              editor.chain().focus().unsetLink().run();
            } else {
              const url = window.prompt('Enter the URL');
              if (url && url.trim() !== '') {
                editor
                  ?.chain()
                  .focus()
                  .extendMarkRange('link')
                  .toggleLink({ href: url as string })
                  .run();
              }
            }
          }}
          data-uk-tooltip={`title: ${t('Link')}; pos: top; offset:6; delay: 300`}>
          <MdLink className='size-5' />
        </Toggle>
        {/* Add Youtube */}
        <Toggle
          value='youtube'
          size='sm'
          pressed={editor.isActive('youtube')}
          onClick={() => {
            const url = window.prompt('Enter the Youtube URL');
            if (url && url.trim() !== '') {
              editor
                ?.chain()
                .focus()
                .setYoutubeVideo({ src: url as string })
                .run();
            }
          }}
          data-uk-tooltip={`title: ${t('Youtube')}; pos: top; offset:6; delay: 300`}>
          <FaYoutube className='size-5' />
        </Toggle>
        {/* Add Image */}
        <Toggle
          value='image'
          size='sm'
          pressed={editor.isActive('image')}
          onClick={() => {
            const url = window.prompt('Enter the Image URL');
            if (url && url.trim() !== '') {
              editor
                ?.chain()
                .focus()
                .setImage({ src: url as string })
                .run();
            }
          }}
          data-uk-tooltip={`title: ${t('Image')}; pos: top; offset:6; delay: 300`}>
          <FaFileImage className='size-5' />
        </Toggle>
        {/* Add Emoji */}
        <Popover
          mainContent={<IoHappy className='size-5' />}
          hoverContent={
            <Picker
              data={async () => {
                const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                return await response.json();
              }}
              i18n={async () => {
                const response = await fetch(
                  `https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/${locale}.json`
                );

                return await response.json();
              }}
              onEmojiSelect={(emoji: IEmoji) => {
                editor.chain().focus().insertContent({ type: 'text', text: emoji.native }).run();
              }}
              theme={mode}
            />
          }
          data-uk-tooltip={`title: ${t('Emoji')}; pos: top; offset:6; delay: 300`}
        />
      </div>
    </div>
  );
};

interface EditorContentProps {
  setEditor?: (editor: EditorProps) => void;
  content?: string;
  placeholder?: string;
  autofocus?: FocusPosition;
  dataSuggestions?: string[];
}

export default function Editor({
  setEditor,
  content,
  placeholder,
  autofocus = 'end',
  dataSuggestions
}: EditorContentProps) {
  const editor = useCustomEditor({
    autofocus,
    editable: true,
    editorProps: {
      attributes: {
        class: 'max-h-[350px] overflow-y-scroll custom-scrollbar-bg'
      }
    },
    content,
    placeholder,
    dataSuggestions
  });

  useEffect(() => {
    if (setEditor && editor) {
      setEditor(editor);
    }
  }, [editor]);

  return (
    <>
      {!editor ? (
        <div className='flex-center w-full h-full p-5'>
          <CircularProgress size={20} className='!text-text-1' />
        </div>
      ) : (
        <div>
          <MenuBar editor={editor} />
          <EditorContent className='my-5 px-2 *:outline-none overflow-hidden' editor={editor} />
        </div>
      )}
    </>
  );
}
