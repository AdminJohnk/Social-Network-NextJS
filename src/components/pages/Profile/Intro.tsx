'use client';

import { IoLocationOutline, IoBriefcaseOutline, IoPeopleOutline, IoAt } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { PiGraduationCap } from 'react-icons/pi';
import { MdOutlineHomeWork } from 'react-icons/md';

import descArrays from '@/lib/descriptions/Tags';
import { useCurrentUserInfo, useOtherUserInfo } from '@/hooks/query';

export interface IIntroProps {
  profileID: string;
}

export default function Intro({ profileID }: IIntroProps) {
  const t = useTranslations();

  const { currentUserInfo } = useCurrentUserInfo();
  const { otherUserInfo: user, isLoadingOtherUserInfo } = useOtherUserInfo(profileID);

  const [more, setMore] = useState(false);

  const isMe = currentUserInfo._id === profileID;
  const tags = more ? user?.tags : user?.tags.slice(0, 6);

  useEffect(() => {
    UIkit.sticky('#profile-side')?.$emit('update');
  }, [tags]);

  return (
    <>
      {isLoadingOtherUserInfo ? (
        <div></div>
      ) : (
        <div className='rounded-lg bg-foreground-1 p-5 px-6 shadow-sm'>
          <div className='flex items-center justify-between text-text-1'>
            <h3 className='text-lg font-bold'> {t('Intro')} </h3>
          </div>

          <ul className='mt-4 space-y-4 text-sm text-text-2'>
            {user?.alias && (
              <li className='flex items-center gap-3'>
                <div className='flex items-center gap-3'>
                  <IoAt className='size-6' />
                  <span className='cursor-default text-blue-600 hover:underline'>{user.alias}</span>
                </div>
              </li>
            )}
            {user?.location && (
              <li className='flex items-center gap-3'>
                <IoLocationOutline className='size-6' />
                <div>
                  {t('Live In')}
                  <span className='otherUserInfo?.font-semibold ms-1 text-text-1'>{user.location}</span>
                </div>
              </li>
            )}
            {user?.education && (
              <li className='flex items-center gap-3'>
                <PiGraduationCap className='size-6' />

                <div>
                  {t('Studied at')}
                  <span className='otherUserInfo?.font-semibold ms-1 text-text-1'>{user.education}</span>
                </div>
              </li>
            )}
            {user?.experiences?.length > 0 && (
              <li className='flex items-center gap-3'>
                <MdOutlineHomeWork className='size-6' />

                <div>
                  {t('Works at')}
                  <span className='otherUserInfo?.font-semibold ms-1 text-text-1'>
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
                  <span className='otherUserInfo?.font-semibold ms-1 text-text-1'>
                    {user?.experiences[0].position_name}
                  </span>
                </div>
              </li>
            )}
            <li className='flex items-center gap-3'>
              <IoPeopleOutline className='size-6' />
              <div>
                {t('Friends')}
                <span className='otherUserInfo?.font-semibold ms-1 text-text-1'>{user?.friend_number}</span>
              </div>
            </li>
          </ul>

          {/* <!-- Expertise --> */}
          {user?.tags.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-1 text-sm font-semibold capitalize'>
              {tags.map((tag, index) => {
                const desc = descArrays.find((item) => item.title === tag);
                return (
                  <div key={index} className='itemTag select-none border-[0.5px] border-border-1 px-4 py-2'>
                    <div className='flex-start'>
                      <span className='mr-2 *:size-5'>{desc?.svg}</span>
                      <span>{desc?.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {user?.tags.length > 6 && (
            <div
              className='mt-3 cursor-pointer text-text-2 duration-300 hover:text-text-1'
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
