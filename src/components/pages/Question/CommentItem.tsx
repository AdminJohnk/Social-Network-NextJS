import Divider from '@/components/shared/Divider';
import { FaPencilAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

export interface ICommentItemProps {}

export default function CommentItem(props: ICommentItemProps) {
  return (
    <div className='text-[0.8rem]'>
      <div className='flex gap-5 px-5'>
        <div className='text-orange-400'>127</div>
        <div>
          Another observation is that you dont need to sort the array, but you
          just need to partition it with the value 128. Sorting is n*log(n),
          whereas partitioning is just linear. Basically it is just one run of
          the quick sort partitioning step with the pivot chosen to be 128.
          Unfortunately in C++ there is just nth_element function, which
          partition by position, not by value –
          <span className='text-blue-400 hover:text-blue-500 duration-300 ms-1'>
            Simon Hrabec
          </span>
          <span className='ms-1 text-text-2'>May 11, 2018 at 12:45</span>
          <span className='ms-4'>
            <FaPencilAlt className='inline-block size-3 text-1' />
          </span>
          <span className='ms-2'>
            <FaCheck className='inline-block size-4 text-text-2 hover:text-green-500 duration-300 cursor-pointer' />
          </span>
        </div>
      </div>
      <Divider className='my-2' />
    </div>
  );
}
