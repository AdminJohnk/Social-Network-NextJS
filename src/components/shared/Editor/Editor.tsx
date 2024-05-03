'use client';

import { useCallback, useEffect, useState } from 'react';
import { useThemeMode } from 'flowbite-react';
import { Editor as EditorProps, EditorContent } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatUnderlined,
  MdLink
} from 'react-icons/md';
import { FaUndo, FaRedo, FaYoutube, FaPen } from 'react-icons/fa';
import { FiAlignCenter } from 'react-icons/fi';
import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { IoCodeSlashOutline, IoHappy } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import Picker from '@emoji-mart/react';
import { cn } from '@/lib/utils';
import Popover from '@/components/ui/popover-v2';
import { IEmoji } from '@/types';
import { useCustomEditor } from '@/hooks/special';

const MenuBar = ({ editor }: { editor: EditorProps | null }) => {
  const [typeNumber, setTypeNumber] = useState(0);
  const { mode } = useThemeMode();

  const selectTypeNumber = useCallback(() => {
    if (editor?.isActive('paragraph')) {
      setTypeNumber(0);
    } else if (editor?.isActive('heading', { level: 1 })) {
      setTypeNumber(1);
    } else if (editor?.isActive('heading', { level: 2 })) {
      setTypeNumber(2);
    } else if (editor?.isActive('heading', { level: 3 })) {
      setTypeNumber(3);
    } else if (editor?.isActive('codeBlock')) {
      setTypeNumber(4);
    } else {
      setTypeNumber(0);
    }
  }, [editor]);

  useEffect(() => {
    editor?.on('selectionUpdate', () => {
      selectTypeNumber();
    });
  }, [editor]);

  const typeText = [
    {
      // Normal
      node: (
        <div className='flex-start gap-1.5'>
          <FiAlignCenter className='size-5' />
          <span>Normal</span>
        </div>
      ),
      callback: () => {
        editor?.chain().focus().setParagraph().run();
      },
      className: editor?.isActive('paragraph') ? 'text-primary-500' : ''
    },
    {
      // Heading 1
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading1 className='size-5' />
          <span>Heading 1</span>
        </div>
      ),
      callback: () => {
        editor?.chain().focus().toggleHeading({ level: 1 }).run();
      },
      className: editor?.isActive('heading', { level: 1 }) ? 'text-primary-500' : ''
    },
    {
      // Heading 2
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading2 className='size-5' />
          <span>Heading 2</span>
        </div>
      ),
      callback: () => {
        editor?.chain().focus().toggleHeading({ level: 2 }).run();
      },
      className: editor?.isActive('heading', { level: 2 }) ? 'text-primary-500' : ''
    },
    {
      // Heading 3
      node: (
        <div className='flex-start gap-1.5'>
          <LuHeading3 className='size-5' />
          <span>Heading 3</span>
        </div>
      ),
      callback: () => {
        editor?.chain().focus().toggleHeading({ level: 3 }).run();
      },
      className: editor?.isActive('heading', { level: 3 }) ? 'text-primary-500' : ''
    },
    {
      // Code Block
      node: (
        <div className='flex-start gap-1.5'>
          <IoCodeSlashOutline className='size-5' />
          <span>Code Block</span>
        </div>
      ),
      callback: () => {
        editor?.chain().focus().toggleCodeBlock().run();
      },
      className: editor?.isActive('codeBlock') ? 'text-primary-500' : ''
    }
  ];

  return (
    <div>
      <div className='flex-start px-2'>
        <div className='flex-start gap-2 *:p-1 *:text-1'>
          <button
            type='button'
            onClick={() => editor?.chain().focus().undo().run()}
            disabled={!editor?.can().chain().focus().undo().run()}>
            <FaUndo className='size-4' />
          </button>
          <button
            type='button'
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={!editor?.can().chain().focus().redo().run()}>
            <FaRedo className='size-4' />
          </button>
        </div>
        <span className='mx-2'>|</span>
        <div className='flex-start gap-2 *:p-1 *:text-1'>
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
            className={editor?.isActive('bold') ? 'text-primary-500' : ''}>
            <MdFormatBold className='size-5' />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={!editor?.can().chain().focus().toggleItalic().run()}
            className={editor?.isActive('italic') ? 'text-primary-500' : ''}>
            <MdFormatItalic className='size-5' />
          </button>
          <button
            onClick={() => editor?.commands.toggleUnderline()}
            disabled={!editor?.can().chain().focus().toggleUnderline().run()}
            className={editor?.isActive('underline') ? 'text-primary-500' : ''}>
            <MdFormatUnderlined className='size-5' />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            disabled={!editor?.can().chain().focus().toggleStrike().run()}
            className={editor?.isActive('strike') ? 'text-primary-500' : ''}>
            <MdFormatStrikethrough className='size-5' />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHighlight().run()}
            disabled={!editor?.can().chain().focus().toggleHighlight().run()}
            className={editor?.isActive('highlight') ? 'text-primary-500' : ''}>
            <FaPen className='size-5' />
          </button>
        </div>
        <span className='mx-2'>|</span>
        <div className='flex-start gap-2 *:p-1 *:text-1'>
          {/* // Bullet List */}
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            disabled={!editor?.can().chain().focus().toggleBulletList().run()}
            className={editor?.isActive('bulletList') ? 'text-primary-500' : ''}>
            <MdFormatListBulleted className='size-5' />
          </button>
          {/* Numbered List */}
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
            className={editor?.isActive('orderedList') ? 'text-primary-500' : ''}>
            <MdFormatListNumbered className='size-5' />
          </button>
        </div>
        <span className='mx-2'>|</span>
        {/* Type Text */}
        <div className='flex-start gap-2 *:p-1 *:text-1'>
          <div>
            <div className='flex-start gap-2 select-none'>
              {typeText[typeNumber].node}
              <GoChevronDown className='size-4' />
            </div>
            <div data-uk-drop='offset: 6; pos: bottom-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
              <div className='p-2 bg-foreground-1 rounded-lg shadow-lg'>
                {typeText.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      'p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg uk-drop-close',
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
        </div>
        <div className='flex-start gap-2 *:p-1 *:text-1'>
          {/* Link */}
          <button
            onClick={() => {
              if (editor?.isActive('link')) {
                editor?.chain().focus().unsetLink().run();
              } else {
                const url = window.prompt('Enter the URL');
                if (url) {
                  editor
                    ?.chain()
                    .focus()
                    .extendMarkRange('link')
                    .toggleLink({ href: url as string })
                    .run();
                }
              }
            }}>
            <MdLink className='size-5' />
          </button>
          {/* Add Youtube */}
          <button
            onClick={() => {
              const url = window.prompt('Enter the Youtube URL');
              if (url) {
                editor
                  ?.chain()
                  .focus()
                  .setYoutubeVideo({ src: url as string })
                  .run();
              }
            }}>
            <FaYoutube className='size-5' />
          </button>
          {/* Add Emoji */}
          <Popover
            open={false}
            mainContent={<IoHappy className='size-5' />}
            hoverContent={
              <Picker
                data={async () => {
                  const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');

                  return response.json();
                }}
                onEmojiSelect={(emoji: IEmoji) => {
                  editor?.chain().focus().insertContent({ type: 'text', text: emoji.native }).run();
                }}
                theme={mode}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

interface EditorContentProps {
  setEditor?: (editor: EditorProps) => void;
  content?: string;
}

export default function Editor({ setEditor, content }: EditorContentProps) {
  const editor = useCustomEditor({
    editable: true,
    editorProps: {
      attributes: {
        class: 'max-h-[350px] overflow-y-scroll custom-scrollbar-bg'
      }
    },
    content
  });

  useEffect(() => {
    if (setEditor && editor) {
      setEditor(editor);
      editor.chain().focus('start').run();
    }
  }, [editor]);

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent className='my-5 px-2 *:outline-none overflow-hidden' editor={editor} />
    </div>
  );
}
