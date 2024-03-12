import {
  IoAddCircleOutline,
  IoDocumentText,
  IoHappyOutline,
  IoHeartOutline,
  IoImage,
  IoImages,
  IoSendOutline
} from 'react-icons/io5';
import { FaGift } from 'react-icons/fa';

export interface IInputChatProps {}

export default function InputChat(props: IInputChatProps) {
  return (
    <div className='flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden'>
      <div id='message__wrap' className='flex items-center gap-2 h-full dark:text-white -mt-1.5'>
        <button type='button' className='shrink-0'>
          <IoAddCircleOutline className='text-3xl flex' />
        </button>
        <div
          className='dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-slate-900'
          data-uk-drop='stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200'>
          <div
            className='sm:w-full p-3 flex justify-center gap-5'
            data-uk-scrollspy='target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true'>
            <button
              type='button'
              className='bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoImage className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoImages className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <IoDocumentText className='text-3xl flex' />
            </button>
            <button
              type='button'
              className='bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark-1 dark:border-0'>
              <FaGift className='text-3xl flex' />
            </button>
          </div>
        </div>

        <button type='button' className='shrink-0'>
          <IoHappyOutline className='text-3xl flex' />
        </button>
        <div
          className='dropbar p-2'
          data-uk-drop='stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 '>
          <div className='sm:w-60 bg-foreground-1 shadow-lg border rounded-xl pr-0 border-border-1'>
            <h4 className='text-sm font-semibold p-3 pb-0'>Send Icon</h4>

            <div className='grid grid-cols-5 overflow-y-auto max-h-44 p-3 text-center text-xl'>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😊
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🤩
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😎
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🥳
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😂
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🥰
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😡
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😊
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🤩
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😎
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🥳
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😂
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🥰
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😡
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🤔
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😊
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🤩
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😎
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                🥳
              </div>
              <div className='hover:bg-hover-1 p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200'>
                😂
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex-1'>
        <textarea
          placeholder='Write your message'
          rows={1}
          className='w-full resize-none bg-foreground-1 rounded-full px-4 p-2'></textarea>

        <button type='button' className='text-white shrink-0 p-2 absolute right-0.5 top-0'>
          <IoSendOutline className='text-xl flex' />
        </button>
      </div>

      <button type='button' className='flex h-full dark:text-white'>
        <IoHeartOutline className='text-3xl flex -mt-3' />
      </button>
    </div>
  );
}
