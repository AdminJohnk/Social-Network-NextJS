'use client';

import { useState } from 'react';
import CreateEditPostSeries from '@/components/pages/Series/CreateEditPostSeries';
import EditButton from '@/components/pages/Series/EditButton';
import Divider from '@/components/shared/Divider';
import Editor from '@/components/shared/Editor/Editor';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Button } from '@/components/ui/button';
import { useCurrentUserInfo, useGetSeriesByID } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Editor as EditorProps } from '@tiptap/react';
import { IoHeartOutline } from 'react-icons/io5';
import { BiCommentDetail } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { IUpdateSeriesPost } from '@/types';

export interface IPostSeriesProps {
  params: {
    seriesID: string;
    postID: string;
  };
}

export default function PostSeries({
  params: { seriesID, postID }
}: IPostSeriesProps) {
  const t = useTranslations();

  const { series } = useGetSeriesByID(seriesID);
  const post = series?.posts.find(p => p._id === postID);
  const author = series?.user;

  const { currentUserInfo } = useCurrentUserInfo();

  const isMe = series?.user?._id === currentUserInfo?._id || false;

  const [editor, setEditor] = useState<EditorProps>();

  // Modal
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
      {isMe && (
        <EditButton
          className='fixed top-1/2 right-4 z-50'
          onClick={() => {
            setOpenEdit(true);
          }}
        />
      )}
      <Modal open={openEdit} handleClose={() => setOpenEdit(false)}>
        <CreateEditPostSeries
          handleClose={() => setOpenEdit(false)}
          series_id={seriesID}
          dataEdit={
            {
              id: post?._id,
              series_id: seriesID,
              title: post?.title,
              description: post?.description,
              cover_image: post?.cover_image,
              content: post?.content,
              read_time: post?.read_time,
              visibility: post?.visibility
            } as IUpdateSeriesPost
          }
        />
      </Modal>
      <div className='max-w-[730px] mx-auto'>
        <Image
          src={getImageURL(post?.cover_image) || '/images/no-image.png'}
          className='rounded-lg w-full object-fill h-[370px]'
          width={1500}
          height={1500}
          alt='cover-image'
          priority
        />
        <div className='h2-semibold mt-7'>{post?.title}</div>
        <div className='text-text-2 text-[1rem] text-pretty mt-4'>
          {post?.description}
        </div>
        <div className='text-text-2 flex-between mt-6 mb-6'>
          <div className='flex-start gap-3'>
            <div className='flex-start gap-2 items-center bg-sky-50 hover:bg-sky-200 text-sky-600 rounded-lg py-1 px-2 border-2 border-sky-100 dark:bg-sky-950 dark:hover:bg-sky-900 dark:border-sky-900 duration-300'>
              <FiFileText className='size-3' />
              <span className='base-semibold '>Blog</span>
            </div>
            <div>{'29 June, 2022'}</div>
            <span>•</span>
            <div>{post?.read_time}</div>
          </div>
          <div className='flex-start gap-3'>
            <div className='flex-start gap-1 cursor-pointer hover:text-red-500 duration-300'>
              <IoHeartOutline className='size-4' />
              <span>16</span>
            </div>
            <div className='flex-start gap-1 cursor-pointer hover:text-teal-400 duration-300'>
              <BiCommentDetail className='size-4' />
              <span>3</span>
            </div>
            <CiBookmark className='size-4 cursor-pointer hover:text-yellow-400 duration-300' />
            <CiShare2 className='size-4 cursor-pointer text-1' />
          </div>
        </div>
        <div>
          <div className='small-semibold mb-2 text-text-2'>Contributors</div>
          <div className='flex-start gap-2'>
            <Avatar src={getImageURL(author?.user_image)} />
            <div>
              <div className='base-semibold'>{author?.name}</div>
              <div className='small-regular'>{author?.alias}</div>
            </div>
          </div>
        </div>
        <div className='text-pretty text-[1rem] leading-relaxed'>
          <ShowContent content={post?.content!} />
        </div>
        <div className='author mt-10 flex-between'>
          <div className='flex-start gap-2'>
            <Link href={`/profile/${author?._id}`}>
              <Avatar src={getImageURL(author?.user_image)} />
            </Link>
            <div className='flex-col'>
              <Link href={`/profile/${author?._id}`}>
                <div>{author?.name}</div>{' '}
              </Link>
              {author?.experiences?.length > 0 && (
                <div className='small-regular text-text-2 space-x-1'>
                  <span>{author?.experiences[0].position_name} at</span>
                  <span>{author?.experiences[0].company_name}</span>
                </div>
              )}
            </div>
          </div>
          <Button>Follow</Button>
        </div>
        <div className='mt-10 space-y-2 py-5 px-5 bg-2 rounded-lg'>
          <div className='base-semibold text-end'>Next</div>
          <div className='base-bold text-end'>
            Ethereum and the Future of the Internet
          </div>
        </div>
        <div className='mt-10'>
          <div className='base-bold'>Discussion</div>
          <div className='editor space-y-5 px-2 py-3 border border-border-1 rounded-lg mt-3'>
            <Editor
              setEditor={setEditor}
              placeholder={t('Write something nice')}
              autofocus={false}
            />
          </div>
          <div className='mt-7'>
            <div className='flex gap-4'>
              <Avatar />
              <div className='flex-col'>
                <div className='flex-start gap-2'>
                  <div className='base-semibold'>John Doe</div>
                  <div className='small-regular text-text-2'>29 Jun, 2022</div>
                </div>
                <div className='text-text-2 mt-1 mb-2'>Thanks for sharing</div>
                <div className='text-text-2 flex-start gap-4'>
                  <div className='flex-start gap-1 cursor-pointer hover:text-red-500 duration-300'>
                    <IoHeartOutline className='size-4' />
                    <span>2</span>
                    <span>{t('Likes')}</span>
                  </div>
                  <div className='flex-start gap-1 cursor-pointer hover:text-teal-400 duration-300s'>
                    <BiCommentDetail className='size-4' />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
