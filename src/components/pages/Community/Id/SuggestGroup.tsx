import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface ISuggestGroupProps {}

export default function SuggestGroup(props: ISuggestGroupProps) {
  const t = useTranslations();
  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <div key={i} className='flex-between mb-4'>
          <div className='flex-start space-x-3'>
            <Image
              className='size-10 rounded-lg'
              src={`/images/avatars/avatar-${i + 1}.jpg`}
              width={100}
              height={100}
              alt='Group avatar'
            />
            <div>
              <div className='base-semibold'>{t('Abstract minimal')}</div>
              <div className='small-regular text-text-2'>
                218 {t('Members')}
              </div>
            </div>
          </div>
          <button className='px-6 py-2 bg-foreground-2 hover:bg-hover-2 rounded-lg duration-300'>
            Join
          </button>
        </div>
      );
    }
    return items;
  };
  return (
    <div className='bg-foreground-1 rounded-lg p-4'>
      <div className='flex-between mb-4'>
        <h2 className='h4-semibold'>{t('Suggested groups')}</h2>
        <button className='text-blue-500'>{t('See all')}</button>
      </div>
      <div>{generateItems()}</div>
    </div>
  );
}
