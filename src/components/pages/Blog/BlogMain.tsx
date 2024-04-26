import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';

import { IoChatboxOutline, IoThumbsUpOutline } from 'react-icons/io5';

export default function BlogMain() {
  const t = useTranslations();
  return (
    <div className='card mt-8'>
      <div className='card-media md:h-80 h-52'>
        <Image src='/images/group/group-cover-1.jpg' alt='' width={1200} height={1200} />
        <div className='card-overly'></div>
      </div>
      <div className='card-body p-5 w-full z-10 absolute bg-gradient-to-t bottom-0 from-black/60'>
        <p className='card-text'>
          <Link href=''> Denise Marie </Link>
        </p>
        <h4 className='card-title text-xl mt-1.5'>Exploring an Abandoned Water Park in China</h4>

        <div className='card-list-info font-medium text-xs mt-1.5 gap-2.5'>
          <div className='flex items-center gap-1.5 text-sm'>
            27
            <IoThumbsUpOutline />
          </div>
          <div className='flex items-center gap-1.5 text-sm'>
            156.9K <IoChatboxOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
