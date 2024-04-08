import { useTranslations } from 'next-intl';
import { CiBookmark, CiFlag1 } from 'react-icons/ci';
import { IoOpenOutline, IoTrashOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { Link } from '@/navigation';

export default function PostMoreChoose() {
  const t = useTranslations();

  const ChooseList = [
    {
      name: t('Add To Favorite'),
      icon: <CiBookmark />
    },
    {
      name: t('Edit Post'),
      icon: <FiEdit />
    },
    {
      name: t('Report This Post'),
      icon: <CiFlag1 />
    },
    {
      name: t('Delete Post'),
      icon: <IoTrashOutline />
    }
  ];

  return (
    <div className='post-more-choose w-56 bg-foreground-1 border border-border-1 text-text-1 p-2'>
      <div>
        <Link
          href={'https://translate.google.com/'}
          className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'
          target='__blank'>
          <span className='text-2xl'>
            <IoOpenOutline />
          </span>
          <span>{t('Open Post In New Tab')}</span>
        </Link>
        {ChooseList.map((item, index) => {
          return (
            <div key={index} className='flex gap-3 p-2.5 hover:bg-hover-1 cursor-pointer rounded-lg'>
              <span className='text-2xl'>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
