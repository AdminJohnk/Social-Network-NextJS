'use client';

import EditButton from '@/components/pages/Series/EditButton';
import CreateEditSeries from '@/components/shared/CreateEditSeries/CreateEditSeries';
import Divider from '@/components/shared/Divider';
import Modal from '@/components/shared/Modal';
import ShowContent from '@/components/shared/ShowContent/ShowContent';
import { Button } from '@/components/ui/button';
import { useGetSeriesByID } from '@/hooks/query';
import { getImageURL } from '@/lib/utils';
import { Link } from '@/navigation';
import { ICreateSeries, IUpdateSeries } from '@/types';
import { Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaPen, FaRegCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

export interface ISeriesProps {
  params: {
    slug: string;
  };
}

export default function Series({ params: { slug } }: ISeriesProps) {
  const { series } = useGetSeriesByID(slug);
  const t = useTranslations();

  const author = series?.user;

  const dataEdit: IUpdateSeries = useMemo(() => {
    if (!series) return {} as IUpdateSeries;
    return {
      id: series._id,
      title: series.title,
      description: series.description,
      introduction: series.introduction,
      cover_image: series.cover_image,
      level: series.level,
      visibility: series.visibility
    };
  }, [series]);

  // Modal
  const [open, setOpen] = useState(false);

  return (
    <div className='ms-60 max-lg:ms-0 mt-16 pt-5 pb-5'>
      <EditButton
        onClick={() => {
          setOpen(true);
        }}
      />
      <Modal open={open} handleClose={() => setOpen(false)}>
        <CreateEditSeries
          handleClose={() => setOpen(false)}
          dataEdit={dataEdit}
        />
      </Modal>
      <div className='max-w-[730px] mx-auto'>
        <Image
          src={getImageURL(series?.cover_image) || '/images/no-image.png'}
          className='rounded-lg w-full object-fill h-[370px]'
          width={1500}
          height={1500}
          alt='cover-image'
          priority
        />
        <div className='h3-semibold mt-7'>{series?.title}</div>
        <div className='text-text-2 text-[0.9rem] text-pretty mt-4'>
          {series?.description}
        </div>
        <Button className='w-full my-7 py-3'>Start Series</Button>
        <div>
          <div className='base-semibold'>{t('Series Content')}</div>
          <div className='space-y-5 mt-6'>
            <div className='flex items-center w-full cursor-pointer'>
              <FaRegCircle className='text-blue-500 size-3' />
              <div className='ms-3'>
                <h2 className='h5-semibold text-text-2'>
                  What is a Blockchain?
                </h2>
                <p className='small-regular text-text-2'>2 min read</p>
              </div>
            </div>
            <div className='flex items-center w-full cursor-pointer'>
              <FaRegCircle className='text-blue-500 size-3' />
              <div className='ms-3'>
                <h2 className='h5-semibold text-text-2'>
                  Ethereum and the Future of the Internet
                </h2>
                <p className='small-regular text-text-2'>2 min read</p>
              </div>
            </div>
          </div>
        </div>
        <Divider className='mt-8 mb-6' />
        <div className='text-pretty text-[0.9rem] leading-relaxed'>
          <ShowContent content={series?.introduction} />
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
                <div className='small-regular text-text-2'>
                  {author?.experiences[0].position_name} at{' '}
                  {author?.experiences[0].company_name}
                </div>
              )}
            </div>
          </div>
          <Button>Follow</Button>
        </div>
        <Divider className='mt-12 mb-6' />
        <div className='info flex-around mt-10'>
          <div className='flex flex-col gap-2'>
            <span className='base-semibold'>Level</span>
            <span className='text-text-2'>Intermediate</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='base-semibold'>Date Published</span>
            <span className='text-text-2'>29 Jun, 2022</span>
          </div>
        </div>
        <Divider className='mt-8 mb-12' />
        <div className='review'>
          <div className='base-semibold mb-5'>Ratings & Reviews</div>
          <div className='grid grid-cols-4'>
            <div className='col-span-1'>
              <div className='text-[60px]'>5.0</div>
              <div className='flex-start *:size-5 *:text-yellow-400 gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-3 text-text-2'>Based on 1 Reviews</div>
            </div>
            <div className='col-span-3 space-y-2'>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>5</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>4</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>3</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>2</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
              <div className='flex-start gap-4'>
                <span className='text-text-2'>1</span>
                <div className='h-2 rounded-full bg-gray-200 w-full'>
                  <div className='h-2 rounded-full bg-yellow-400 w-[50%]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className='w-full my-9 py-2'
          preIcon={<FaPen className='size-4' />}
        >
          Write Review
        </Button>
        <div className='render-review'>
          <div className='flex gap-4'>
            <Avatar />
            <div className='flex-col'>
              <div className='flex-start gap-2'>
                <div className='base-semibold'>John Doe</div>
                <div className='small-regular text-text-2'>29 Jun, 2022</div>
              </div>
              <div className='text-text-2 mt-1 mb-2'>Thanks for sharing</div>
              <div className='flex-start *:size-4 *:text-yellow-400 gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
