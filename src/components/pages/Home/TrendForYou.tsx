import { FiRefreshCw } from 'react-icons/fi';
import { FaHashtag } from 'react-icons/fa';

const TrendList = [
  {
    name: 'Artificial Intelligence',
    post_number: '1.245.62'
  },
  {
    name: 'Web developers',
    post_number: '1.624'
  },
  {
    name: 'Ui Designers',
    post_number: '820'
  },
  {
    name: 'Affiliate Marketing ',
    post_number: '480'
  }
];

export interface ITrendForYouProps {}

export default function TrendForYou(props: ITrendForYouProps) {
  return (
    <div className='trend-for-you px-5 py-4 bg-foreground-1 rounded-lg'>
      <div className='flex-between'>
        <span className='h5-bold'>People You might know</span>
        <span>
          <FiRefreshCw className='size-4 cursor-pointer' />
        </span>
      </div>
      <div className='mt-6'>
        {TrendList.map((item, index) => {
          return (
            <div key={index} className='mb-4 flex-start cursor-pointer'>
              <div>
                <FaHashtag />
              </div>
              <div className='flex flex-col ms-3'>
                <span className='h5-bold base-bold'>{item.name}</span>
                <span className='text-text-2 small-regular'>
                  {item.post_number} Posts
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
