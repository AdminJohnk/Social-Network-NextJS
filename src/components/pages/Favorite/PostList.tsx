'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { isThisWeek, isThisYear, isToday } from 'date-fns';
import { useFormatter, useNow, useTranslations } from 'next-intl';
import { IoEllipsisHorizontal, IoFlagOutline, IoShareOutline } from 'react-icons/io5';

import { Link } from '@/navigation';
import { getImageURL } from '@/lib/utils';
import Modal from '@/components/shared/Modal';
import { useSavedPostsData } from '@/hooks/query';
import ButtonRemoveSavePost from './ButtonRemoveSavePost';
import PostSkeleton from '@/components/shared/Post/PostSkeleton';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import CreateNewPostShare from '@/components/shared/CreateNewPostShare/CreateNewPostShare';

export interface IPostsListProps { }

export default function PostsList({ }: IPostsListProps) {
  const t = useTranslations();
  const { savedPosts, isLoadingSavedPosts } = useSavedPostsData();

  useNow({ updateInterval: 1000 * 30 });
  const format = useFormatter();

  const handleDateTime = useCallback((date: string) => {
    const messageDate = new Date(date).getTime();

    // check if today
    if (isToday(messageDate)) {
      return format.relativeTime(new Date(date), new Date());
    }

    // check if this week
    if (isThisWeek(messageDate, { weekStartsOn: 1 })) {
      return (
        format.dateTime(new Date(date), { weekday: 'long' }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    // check if this year
    if (isThisYear(messageDate)) {
      return (
        format.dateTime(new Date(date), {
          month: 'long',
          day: 'numeric'
        }) +
        ' • ' +
        format.dateTime(new Date(date), {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        })
      );
    }

    return (
      format.dateTime(new Date(date), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) +
      ' • ' +
      format.dateTime(new Date(date), {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    );
  }, []);

  const [openShare, setOpenShare] = useState(false);
  const [isSharePost, setIsSharePost] = useState('');
  const handleOpenShare = (postID: string) => {
    setIsSharePost(postID);
    setOpenShare(true);
  }
  const handleCloseShare = () => setOpenShare(false);
  return (
    <>
      {isLoadingSavedPosts ? (
        <PostSkeleton />
      ) : savedPosts?.length === 0 ? (
        <>No Post</>
      ) : (
        <div className='post *:mb-6 mt-6 p-6'>
          {savedPosts?.map((post) => {
            return (
              <div className='card-list bg-foreground-1 p-4 rounded-lg' key={post._id}>
                <Link href={`/posts/${post._id}`}>
                  <div className='card-list-media md:w-[320px] md:h-[180px] sm:aspect-[3/1.2] aspect-[3/1.5]'>
                    {post!.post_attributes.images.length > 0 ? (
                      <Image
                        width={1000}
                        height={1000}
                        src={getImageURL(post!.post_attributes.images[0])}
                        alt={post!.post_attributes.images[0]}
                      />
                    ) : (
                      <Image
                        width={1000}
                        height={1000}
                        src={getImageURL(post!.post_attributes.user.user_image)}
                        alt={post!.post_attributes.user.user_image}
                      />
                    )}
                  </div>
                </Link>
                <div className='card-list-body relative'>
                  {/* <Link href="#"> <h3 className="card-list-title lg:mt-2 lg:line-clamp-1 !whitespace-nowrap !inline-block"> {<ShowContent content={post.post_attributes.content.length > 250 ? post.post_attributes.content.slice(0, 250) + '...' : post.post_attributes.content} />} </h3> </Link> */}

                  <div className='flex flex-col justify-between h-full'>
                    <div className='card-list-text !mt-0 mr-8'>
                      <ShowContent
                        className='line-clamp-3'
                        content={post.post_attributes.content}
                      />
                    </div>
                    <div>
                      <div className='card-list-link mt-5 w-fit'>
                        <Link href={`/profile/${post.post_attributes.user._id}`}>
                          {post.post_attributes.user.name}
                        </Link>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='card-list-info'>
                          <div> {handleDateTime(post.createdAt)}</div>
                        </div>
                        <ButtonRemoveSavePost post_id={post._id} />
                      </div>
                    </div>
                  </div>

                  {/* <!-- dropdown menu --> */}
                  <div className='absolute top-0 right-0 -m-1'>
                    <button
                      type='button'
                      className='hover:bg-secondery w-10 h-10 rounded-full grid place-items-center'>
                      <IoEllipsisHorizontal className='text-2xl' />
                    </button>
                    <div
                      className='w-[245px]'
                      uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'>
                      <nav>
                        <div className='flex cursor-pointer hover:bg-hover-1 rounded-lg gap-2 p-2'>
                          <IoFlagOutline className='text-xl' /> {t('Report')}
                        </div>
                        {post.type === 'Post' && (
                          <div>
                            <div
                              className='flex cursor-pointer hover:bg-hover-1 rounded-lg gap-2 p-2'
                              onClick={() => { handleOpenShare(post._id) }}>
                              <IoShareOutline className='text-xl' /> {t('Share')}
                            </div>
                            <Modal open={openShare && post._id == isSharePost} handleClose={handleCloseShare}>
                              <CreateNewPostShare handleClose={handleCloseShare} post={post} />
                            </Modal>
                          </div>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
