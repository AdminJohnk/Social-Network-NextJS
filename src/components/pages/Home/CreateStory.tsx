import { useTranslations } from 'next-intl';
import { IoImage, IoTimeOutline } from 'react-icons/io5';

export interface ICreateStoryProps {}

export default function CreateStory(props: ICreateStoryProps) {
  const t = useTranslations();

  return (
    <div className='hidden lg:p-20' id='create-story' data-uk-modal=''>
      <div className='uk-modal-dialog tt relative overflow-hidden mx-auto bg-background-1 p-7 shadow-xl rounded-lg md:w-[520px] w-full'>
        <div className='text-center py-3 border-b -m-7 mb-0 dark:border-slate-700'>
          <h2 className='text-sm font-medium'> {t('Create Story')} </h2>

          {/* <!-- close button --> */}
          <button type='button' className='button__ico absolute top-0 right-0 m-2.5 uk-modal-close'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>

        <div className='space-y-5 mt-7'>
          <div>
            <input
              type='text'
              className='w-full mt-3 border-transparent bg-foreground-1 rounded-xl placeholder:text-text-2'
              placeholder={t('What do you have in mind?')}
            />
          </div>

          <div>
            <div className="w-full h-72 relative border-border-1 rounded-lg overflow-hidden bg-[url('/images/ad_pattern.png')] bg-repeat">
              <label
                htmlFor='createStatusUrl'
                className='flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60'>
                <input id='createStatusUrl' type='file' className='hidden' />
                <IoImage className='text-3xl text-teal-600' />
                <span className='text-white mt-2'>{t('Upload image')}</span>
              </label>

              <img
                id='createStatusImage'
                src='#'
                alt='Uploaded Image'
                style={{ display: 'none' }}
                className='w-full h-full absolute object-cover'
              />
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex items-start gap-2'>
              <IoTimeOutline className='text-3xl text-sky-600 rounded-full bg-blue-50 dark:bg-transparent' />
              <p className='text-sm text-text-3 font-medium'>
                {t('Your story will be available')} <br /> {t('for')}
                <span className='font-semibold text-text-2'> {t('24 Hours')}</span>
              </p>
            </div>

            <button type='button' className='button bg-blue-1 hover:bg-blue-2 duration-300 text-white px-8'>
              {t('Create')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
