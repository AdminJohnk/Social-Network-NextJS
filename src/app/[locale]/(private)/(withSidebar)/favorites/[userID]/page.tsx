import PostsList from '@/components/pages/Favorite/PostList';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface IFavoriteProps {
  params: {
    locale: string;
  };
}

export default function Favorite({ params: { locale } }: IFavoriteProps) {
  unstable_setRequestLocale(locale);
  return (
    <div
      className='ms-60 max-lg/2:ms-0'
      style={{
        zIndex: 1
      }}>
      <div className='newsfeed mt-16 3xl:px-40 py-10 px-2 sm:px-14 xl:px-24 2xl:px-32'>
        <PostsList />
      </div>
    </div>
  );
}
