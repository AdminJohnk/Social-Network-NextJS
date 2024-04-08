'use client';

import { useOtherUserInfo } from '@/hooks/query';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoLocationOutline, IoBriefcaseOutline, IoPeopleOutline } from 'react-icons/io5';
import { PiGraduationCap } from 'react-icons/pi';
import { MdOutlineHomeWork } from 'react-icons/md';

export interface IIntroProps {
  profileID: string;
}

export default function Intro({ profileID }: IIntroProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  const isMe = session?.id === profileID;

  const { otherUserInfo: user, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  return (
    <>
      {isLoadingOtherUserInfo ? (
        <></>
      ) : (
        <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
          <div className='flex items-center justify-between text-text-1'>
            <h3 className='font-bold text-lg'> {t('Intro')} </h3>
            {/* {isMe && (
              <Link href='#' className='text-sm text-blue-500'>
                {t('Edit')}
              </Link>
            )} */}
          </div>

          <ul className='text-text-2 space-y-4 mt-4 text-sm '>
            <li className='flex items-center gap-3'>
              <IoLocationOutline className='size-6' />
              <div>
                {t('Live In')}
                <span className='otherUserInfo?.font-semibold text-text-1 ms-1'>{user?.location}</span>
              </div>
            </li>
            {user?.education && (
              <li className='flex items-center gap-3'>
                <PiGraduationCap className='size-6' />

                <div>
                  {t('Studied at')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>{user.education}</span>
                </div>
              </li>
            )}
            {user.experiences.length > 0 && (
              <li className='flex items-center gap-3'>
                <MdOutlineHomeWork className='size-6' />

                <div>
                  {t('Works at')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>
                    {user.experiences[0].company_name}
                  </span>
                </div>
              </li>
            )}
            {user.experiences.length > 0 && (
              <li className='flex items-center gap-3'>
                <IoBriefcaseOutline className='size-6' />

                <div>
                  {t('Position')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>
                    {user.experiences[0].position_name}
                  </span>
                </div>
              </li>
            )}
            <li className='flex items-center gap-3'>
              <IoPeopleOutline className='size-6' />
              <div>
                {t('Friends')}
                <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>{user.friend_number}</span>
              </div>
            </li>
          </ul>

          {/* <!-- Hobbies --> */}
          <div className='flex flex-wrap gap-1 text-sm mt-4 font-semibold capitalize'>
            <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
              {t('Shopping')}
            </div>
            <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
              {t('code')}
            </div>
            <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
              {t('art')}
            </div>
            <div className='inline-flex items-center gap-2 py-0.5 px-2.5 border shadow rounded-full border-gray-100'>
              {t('design')}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-1 text-center text-sm mt-4 mb-2 rounded-lg overflow-hidden'>
            <div className='relative w-full aspect-[4/3]'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-5.jpg'
                alt=''
                className='object-cover w-full h-full inset-0'
              />
            </div>
            <div className='relative w-full aspect-[4/3]'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-7.jpg'
                alt=''
                className='object-cover w-full h-full inset-0'
              />
            </div>
            <div className='relative w-full aspect-[4/3]'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-4.jpg'
                alt=''
                className='object-cover w-full h-full inset-0'
              />
            </div>
            <div className='relative w-full aspect-[4/3]'>
              <Image
                width={500}
                height={500}
                src='/images/avatars/avatar-6.jpg'
                alt=''
                className='object-cover w-full h-full inset-0'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
