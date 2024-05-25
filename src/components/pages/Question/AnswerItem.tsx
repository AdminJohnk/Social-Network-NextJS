import { Avatar } from '@mui/material';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import CommentItem from './CommentItem';
import Divider from '@/components/shared/Divider';
import { Link } from '@/navigation';

export interface IAnswerItemProps {}

export default function AnswerItem(props: IAnswerItemProps) {
  return (
    <div>
      <div className='flex-start'>
        <div className='flex flex-col gap-2 mr-3 text-center'>
          <span className='p-2 rounded-full border border-border-1 cursor-pointer'>
            <BiSolidUpArrow className='size-5 text-1' />
          </span>
          <span className='h5-semibold'>6</span>
          <span className='p-2 rounded-full border border-border-1 cursor-pointer'>
            <BiSolidDownArrow className='size-5 text-1' />
          </span>
          <span className='p-2 rounded-full'>
            <FaRegBookmark className='size-4 cursor-pointer text-1' />
          </span>
        </div>
        <div className='grow'>
          According to Next Auth docs, I can pass additional parameters to the
          /authorize endpoint through the third argument of signIn(). They show
          two examples: However, there is no full working example and Im unable
          to read any additional parameters that Ive added in
          /api/auth/[...nextauth].js. Can anyone show me how to read these
          additional parameters in, for example, the signIn() callback? Heres a
          simple example to illustrate what I mean:
        </div>
      </div>
      <div className='flex-end mt-10 small-regular'>
        <div className='flex justify-between w-[60%]'>
          <div className='text-text-2 pt-2'>edited Sep 21, 2022 at 0:12</div>
          <div className='p-2 bg-blue-200 dark:bg-blue-950 rounded-lg'>
            <div className='text-text-2'>asked Sep 20, 2022 at 23:54</div>
            <div className='flex-start'>
              <div className='mt-2'>
                <Avatar sx={{ width: 30, height: 30 }} />
              </div>
              <div className='flex flex-col ms-2'>
                <Link
                  href={''}
                  className='text-blue-400 hover:text-blue-500 duration-300'
                >
                  matic
                </Link>
                <span>Position Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className='mt-10' />
      <div className='py-2 text-pretty'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className='text-1 text-[0.8rem] cursor-pointer'>Add a comment</div>
      <Divider className='mt-2 mb-8' />
    </div>
  );
}
