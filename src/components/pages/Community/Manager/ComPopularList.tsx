import Image from 'next/image';
import { Link } from '@/navigation';

export default function ComPopularList() {
  return (
    <div>
      <div
        className='grid md:grid-cols-3 grid-cols-2 gap-2.5'
        data-uk-scrollspy='target: > div; cls: uk-animation-scale-up; delay: 20 ;repeat: true'>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Delicious Foods</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Abstract minimal</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Delicious Foods</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 325 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-1.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Graphic Design</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 142 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Delicious Foods</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Abstract minimal</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-3.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Abstract minimal</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 218 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-2.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Delicious Foods</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 164 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <Link href='/community'>
            <div className='card-media h-24'>
              <Image width={500} height={500} src='/images/group/group-cover-4.jpg' alt='' />
              <div className='card-overly'></div>
            </div>
          </Link>
          <div className='card-body relative z-10'>
            <Link href='/community'>
              <h4 className='card-title'>Delicious Foods</h4>
            </Link>
            <div className='card-text mt-1'>
              <div className='flex items-center flex-wrap space-x-1'>
                <Link href=''>
                  <span> 325 Members </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center my-6'>
        <button type='button' className='py-2 px-5 rounded-full shadow-md font-semibold text-sm'>
          Load more...
        </button>
      </div>
    </div>
  );
}
