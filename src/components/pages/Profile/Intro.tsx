'use client';

import { useOtherUserInfo } from '@/hooks/query';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { IoLocationOutline, IoBriefcaseOutline, IoPeopleOutline, IoAt } from 'react-icons/io5';
import { PiGraduationCap } from 'react-icons/pi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { useEffect, useState } from 'react';
import descArrays from '@/lib/descriptions/Tags';

export interface IIntroProps {
  profileID: string;
}

export default function Intro({ profileID }: IIntroProps) {
  const t = useTranslations();
  const { data: session } = useSession();

  const isMe = session?.id === profileID;

  const { otherUserInfo: user, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  const [more, setMore] = useState(false);

  const tags = more ? user?.tags : user?.tags.slice(0, 6);

  useEffect(() => {
    UIkit.sticky('#profile-side')?.$emit('update');
  }, [tags]);

  return (
    <>
      {isLoadingOtherUserInfo ? (
        <></>
      ) : (
        <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
          <div className='flex items-center justify-between text-text-1'>
            <h3 className='font-bold text-lg'> {t('Intro')} </h3>
            {isMe && (
              <Link href='/edit-profile' className='text-sm text-blue-500'>
                {t('Edit')}
              </Link>
            )}
          </div>

          <ul className='text-text-2 space-y-4 mt-4 text-sm '>
            {user?.alias && (
              <li className='flex items-center gap-3'>
                <div className='flex items-center gap-3'>
                  <IoAt className='size-6' />
                  <span className='text-blue-600 cursor-default hover:underline'>{user.alias}</span>
                </div>
              </li>
            )}
            {user?.location && (
              <li className='flex items-center gap-3'>
                <IoLocationOutline className='size-6' />
                <div>
                  {t('Live In')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1'>{user.location}</span>
                </div>
              </li>
            )}
            {user?.education && (
              <li className='flex items-center gap-3'>
                <PiGraduationCap className='size-6' />

                <div>
                  {t('Studied at')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>{user.education}</span>
                </div>
              </li>
            )}
            {user?.experiences?.length > 0 && (
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
            {user?.experiences?.length > 0 && (
              <li className='flex items-center gap-3'>
                <IoBriefcaseOutline className='size-6' />

                <div>
                  {t('Position')}
                  <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>
                    {user?.experiences[0].position_name}
                  </span>
                </div>
              </li>
            )}
            <li className='flex items-center gap-3'>
              <IoPeopleOutline className='size-6' />
              <div>
                {t('Friends')}
                <span className='otherUserInfo?.font-semibold text-text-1 ms-1 '>{user?.friend_number}</span>
              </div>
            </li>
          </ul>

          {/* <!-- Expertise --> */}
          {user?.tags.length > 0 && (
            <div className='flex flex-wrap gap-1 text-sm mt-4 font-semibold capitalize'>
              {tags.map((tag, index) => {
                const desc = descArrays.find((item) => item.title === tag);
                return (
                  <div key={index} className='itemTag border-[0.5px] border-border-1 select-none px-4 py-2'>
                    <div className='flex-start'>
                      <span className='*:size-5 mr-2'>{desc?.svg}</span>
                      <span>{desc?.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {user?.tags.length > 6 && (
            <div
              className='mt-3 text-text-2 hover:text-text-1 duration-300 cursor-pointer'
              onClick={() => {
                setMore(!more);
              }}>
              {more ? t('Show less') : t('Show more')}
            </div>
          )}
        </div>
      )}
    </>
  );
}
