import { useTranslations } from 'next-intl';
import { CiBookmark, CiFlag1 } from 'react-icons/ci';
import { IoVolumeMuteOutline, IoShareOutline } from 'react-icons/io5';

export interface IPostMoreChooseProps {}

export default function PostMoreChoose(props: IPostMoreChooseProps) {
  const t = useTranslations();

  const ChooseList = [
    {
      name: t('Add To Favorite'),
      icon: <CiBookmark />
    },
    {
      name: t('Mute Notification'),
      icon: <IoVolumeMuteOutline />
    },
    {
      name: t('Report This Post'),
      icon: <CiFlag1 />
    },
    {
      name: t('Share Your Profile'),
      icon: <IoShareOutline />
    }
  ];
  return (
    <div className='post-more-choose w-56 bg-foreground-1 border border-border-1 text-text-1 p-2'>
      <div>
        {ChooseList.map((item, index) => {
          return (
            <div
              key={index}
              className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'
            >
              <span className='text-2xl'>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
