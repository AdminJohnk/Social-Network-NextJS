'use client';

import { FiRefreshCw } from 'react-icons/fi';
import { FaHashtag } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { useGetAllHashtags } from '@/hooks/query';

export default function TrendForYou() {
  const t = useTranslations();

  const { allHashtags, isLoadingAllHashtags } = useGetAllHashtags();

  const TrendList = useMemo(() => {
    if (!allHashtags) return [];
    return allHashtags
      .filter((item) => item.posts.length > 0)
      .map((item) => ({
        name: item.name,
        post_number: item.posts.length
      }))
      .slice(0, 5);
  }, [allHashtags]);

  return (
    <div className='trend-for-you px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-between'>
        <span className='h5-bold'>{t('Trends for you')}</span>
        <span>
          <FiRefreshCw className='size-4 cursor-pointer' />
        </span>
      </div>
      <div className='mt-6'>
        {!isLoadingAllHashtags &&
          TrendList.map((item, index) => {
            return (
              <div key={index} className='mb-4 flex-start cursor-pointer'>
                <div>
                  <FaHashtag />
                </div>
                <div className='flex flex-col ms-3'>
                  <span className='h5-bold base-bold'>{item.name}</span>
                  <span className='text-text-2 small-regular'>{t('posts', { count: item.post_number })}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
