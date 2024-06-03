'use client';

import { useTranslations } from 'next-intl';
import { MdOutlineRuleFolder, MdPublic } from 'react-icons/md';

import { useGetCommunityByID } from '@/hooks/query';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IoMdLock } from 'react-icons/io';

interface IAboutProps {
  communityID: string;
}

export default function About({ communityID }: IAboutProps) {
  const t = useTranslations();

  const { community, isLoadingCommunity } = useGetCommunityByID(communityID);

  return (
    <>
      {isLoadingCommunity ? (
        <>Loading....</>
      ) : (
        <div className='bg-foreground-1 rounded-lg shadow-sm p-5 px-6'>
          <div className='flex items-ce justify-between text-text-1'>
            <h3 className='font-bold text-lg'>{t('About')}</h3>
          </div>
          <ul className='text-gray-700 space-y-4 mt-2 mb-1 text-sm dark:text-white'>
            <li>
              {community.about ||
                'This is a community for people who love to share their thoughts and ideas.'}
            </li>
            <li className='flex items-start gap-3'>
              {community.visibility === 'public' ? (
                <MdPublic className='size-8' />
              ) : (
                <IoMdLock className='size-8' />
              )}
              <div>
                <span className='font-semibold text-text-1'>
                  {community.visibility === 'public' ? t('Public') : t('Private')}
                </span>
                <p>
                  {community.visibility === 'public'
                    ? t("Anyone can see who's in the group and what they post")
                    : t("Only members can see who's in the group and what they post")}
                  .
                </p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                />
              </svg>
              <div>
                {t('Members')}
                <span className='font-semibold text-text-1 ml-2'>{community.members.length}</span>
              </div>
            </li>
            {community.rules.length > 0 && (
              <li className='flex items-center'>
                <Accordion type='multiple' className='w-full'>
                  {community.rules.map((rule, index) => (
                    <AccordionItem key={index} value={rule.content}>
                      <AccordionTrigger className='flex items-center gap-3'>
                        <div className='flex items-center gap-3'>
                          <MdOutlineRuleFolder className='size-6' />
                          <span>{rule.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>{rule.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
