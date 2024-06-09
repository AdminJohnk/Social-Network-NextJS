import PostDetailWrap from '@/components/shared/Post/PostDetailWrap';
import { unstable_setRequestLocale } from 'next-intl/server';

export interface IPostDetailProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function PostDetail({ params: { locale, slug } }: IPostDetailProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className='z-[1] ms-60 max-lg/2:ms-0'>
      <div className='newsfeed 3xl:px-40 mt-16 px-2 py-10 sm:px-14 xl:px-24 2xl:px-32'>
        <PostDetailWrap postID={slug} />
      </div>
    </div>
  );
}
