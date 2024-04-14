import { useTranslations } from 'next-intl';
import { IoCheckmarkCircle, IoChevronDownOutline } from 'react-icons/io5';

export interface IPostPrivacyProps {
  setPrivacy: (privacy: string) => void;
}

export default function PostPrivacy({ setPrivacy }: IPostPrivacyProps) {
  const t = useTranslations();

  return (
    <div>
      <button
        className='inline-flex items-center py-1 px-2.5 gap-1 font-medium text-sm rounded-full bg-foreground-1 border-2 border-border-1 group aria-expanded:bg-foreground-2'
        type='button'
      >
        {t('Everyone')}
        <IoChevronDownOutline className='text-base duration-500 group-aria-expanded:rotate-180' />
      </button>

      <div
        className='p-2 bg-foreground-1 rounded-lg shadow-lg text-text-1 font-medium border border-border-1 w-60'
        data-uk-drop='offset:10;pos: bottom-left; reveal-left;animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left ; mode:click'
      >
        <form>
          <label
            className='uk-drop-close'
            onClick={() => {
              setPrivacy('public');
            }}
          >
            <input
              type='radio'
              name='radio-status'
              id='monthly1'
              className='peer appearance-none hidden'
              defaultChecked
            />
            <div className='relative flex items-center justify-between cursor-pointer rounded-md p-2 px-3 hover:bg-hover-1 peer-checked:[&_.active]:block'>
              <div className='text-sm'> {t('Everyone')} </div>
              <IoCheckmarkCircle className='hidden active absolute -translate-y-1/2 right-2 text-2xl text-blue-600 uk-animation-scale-up' />
            </div>
          </label>
          <label
            className='uk-drop-close'
            onClick={() => {
              setPrivacy('friend');
            }}
          >
            <input
              type='radio'
              name='radio-status'
              id='monthly1'
              className='peer appearance-none hidden'
            />
            <div className='relative flex items-center justify-between cursor-pointer rounded-md p-2 px-3 hover:bg-hover-1 peer-checked:[&_.active]:block'>
              <div className='text-sm'> {t('Friends')} </div>
              <IoCheckmarkCircle className='hidden active absolute -translate-y-1/2 right-2 text-2xl text-blue-600 uk-animation-scale-up' />
            </div>
          </label>
          <label
            className='uk-drop-close'
            onClick={() => {
              setPrivacy('private');
            }}
          >
            <input
              type='radio'
              name='radio-status'
              id='monthly'
              className='peer appearance-none hidden'
            />
            <div className='relative flex items-center justify-between cursor-pointer rounded-md p-2 px-3 hover:bg-hover-1 peer-checked:[&_.active]:block'>
              <div className='text-sm'> {t('Only me')} </div>
              <IoCheckmarkCircle className='hidden active absolute -translate-y-1/2 right-2 text-2xl text-blue-600 uk-animation-scale-up' />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
