import Image from 'next/image';

export interface IBlogContentProps {}

export default function BlogContent(props: IBlogContentProps) {
  return (
    <div className='box overflow-hidden bg-foreground-1'>
      <div className='relative h-80'>
        <Image
          src='/images/blog/img-5.jpg'
          className='mb-4 w-full h-full object-cover'
          alt=''
          width={1000}
          height={1000}
        />

        <div className='p-6 w-full z-10 absolute bg-gradient-to-t bottom-0 hidden'>
          <h1 className='text-xl font-semibold'>How designers estimate the impact of UX?</h1>

          <div className='flex items-center gap-5 mt-4'>
            <div className='w-6 h-6 flex-shrink-0 rounded-md relative'>
              <Image
                src='/images/avatars/avatar-7.jpg'
                className='absolute w-full h-full inset-0 rounded-full object-cover'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div className='flex-1'>
              <h4 className='font-medium'> Steeve </h4>
              <div className='small-regular'> 2 hours ago</div>
            </div>
            <div className='ml -auto'>Business</div>
            <div className='ml-auto'>November 1, 2022</div>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <h1 className='text-xl font-semibold mt-1'>How designers estimate the impact of UX?</h1>

        <div className='flex gap-3 mt-6'>
          <Image
            src='/images/avatars/avatar-5.jpg'
            alt=''
            className='w-9 h-9 rounded-full'
            width={50}
            height={50}
          />
          <div className='flex-1'>
            <h4 className='font-medium'>Steeve</h4>
            <div className='small-regular text-text-2'>2 hours ago</div>
          </div>
          <div className='font-normal gap-1'>
            <span className='ml -auto text-text-3'> Business </span>
            <span className='ml-auto text-text-2'>Sep 15, 2023</span>
          </div>
        </div>

        <div className='space-y-2 font-normal mt-6 leading-6'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo , consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
}
