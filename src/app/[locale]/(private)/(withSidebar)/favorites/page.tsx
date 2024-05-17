'use client';
import PostsList from '@/components/pages/Favorite/PostList';
import { useTranslations } from 'next-intl';

export interface IFavoriteProps {
}

export default function Favorite({ }: IFavoriteProps) {
  const t = useTranslations();
  return (
    <div
      className='ms-60 max-lg/2:ms-0'
      style={{
        zIndex: 1
      }}>
      <div className='newsfeed mt-16 3xl:px-40 py-10 px-2 sm:px-14 xl:px-24 2xl:px-32'>

        <div className="flex items-center justify-between text-black dark:text-white py-3">
          <h3 className="text-xl font-semibold"> {t('All Favorites')} </h3>
          {/* <Link href="#" className="text-sm text-blue-500">See all</Link> */}
          {/* TODO: Create filter button */}
        </div>
        <PostsList />
        {/* <div className="flex justify-center my-6">
          <button type="button" className="bg-foreground-1 py-2 px-5 rounded-full shadow-md font-semibold text-sm">Load more...</button>
        </div> */}
      </div>
    </div>
  );
}


