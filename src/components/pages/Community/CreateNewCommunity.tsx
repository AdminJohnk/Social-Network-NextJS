import { InputStyle, LabelStyle } from '@/components/shared/InputStyle';
import TextareaV2 from '@/components/ui/textarea-v2';
import { useTranslations } from 'next-intl';
import { IoHappy, IoHappyOutline } from 'react-icons/io5';
import Picker from '@emoji-mart/react';
import { useRef, useState } from 'react';
import { useThemeMode } from 'flowbite-react';
import { IEmoji } from '@/types';
import Popover from '@/components/ui/popover-v2';

export interface ICreateNewCommunityProps {}

export default function CreateNewCommunity(props: ICreateNewCommunityProps) {
  const t = useTranslations();
  const { mode } = useThemeMode();

  const [description, setDescription] = useState('');
  const [cursorDes, setCursorDes] = useState(0);

  const [about, setAbout] = useState('');
  const [cursorAbout, setCursorAbout] = useState(0);

  //   name, description, about, tags, members, admins, rules

  return (
    <div className='relative mx-auto bg-background-1 shadow-xl rounded-lg w-[650px] animate-fade-up'>
      <div className='text-center py-4 border-b mb-0 border-border-1'>
        <h2 className='text-sm font-medium text-text-1'>{t('Create Post')}</h2>
      </div>

      <div className='max-h-[490px] overflow-y-scroll custom-scrollbar-bg px-5 py-4'>
        <div className='relative'>
          <InputStyle />
          <LabelStyle>Community Name</LabelStyle>
        </div>
        <div className='mt-7 flex-between'>
          <TextareaV2
            label='Description'
            value={description}
            onChange={e => {
              setDescription(e.currentTarget.value);
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorDes(cursorPosition || 0);
            }}
            onClick={e => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorDes(cursorPosition || 0);
            }}
            onKeyUp={e => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorDes(cursorPosition || 0);
            }}
          />
          <div className='ms-2'>
            <Popover
              open={false}
              mainContent={<IoHappyOutline className='text-2xl' />}
              hoverContent={
                <Picker
                  data={async () => {
                    const response = await fetch(
                      'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
                    );

                    return response.json();
                  }}
                  onEmojiSelect={(emoji: IEmoji) => {
                    setCursorDes(cursorDes + emoji.native.length);
                    setDescription(
                      description.slice(0, cursorDes) +
                        emoji.native +
                        description.slice(cursorDes)
                    );
                  }}
                  theme={mode}
                />
              }
            />
          </div>
        </div>
        <div className='mt-7 flex-between'>
          <TextareaV2
            label='About'
            value={about}
            onChange={e => {
              setAbout(e.currentTarget.value);
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
            onClick={e => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
            onKeyUp={e => {
              // get cursor position
              const cursorPosition = e.currentTarget.selectionStart;
              setCursorAbout(cursorPosition || 0);
            }}
          />
          <div className='ms-2'>
            <Popover
              open={false}
              mainContent={<IoHappyOutline className='text-2xl' />}
              hoverContent={
                <Picker
                  data={async () => {
                    const response = await fetch(
                      'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
                    );

                    return response.json();
                  }}
                  onEmojiSelect={(emoji: IEmoji) => {
                    setCursorAbout(cursorAbout + emoji.native.length);
                    setAbout(
                      about.slice(0, cursorAbout) +
                        emoji.native +
                        about.slice(cursorAbout)
                    );
                  }}
                  theme={mode}
                />
              }
            />
          </div>
        </div>
      </div>

      <div className='p-5 flex justify-between items-center'></div>
    </div>
  );
}
