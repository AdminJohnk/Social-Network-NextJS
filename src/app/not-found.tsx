'use client';

import { Flowbite } from 'flowbite-react';
import { Link } from '@/navigation';

export default function NotFound() {
  return (
    <html className='global'>
      <body>
        <Flowbite>
          <section className='bg-background-1 h-dvh flex-center'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
              <div className='mx-auto max-w-screen-sm text-center'>
                <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
                  404
                </h1>
                <p className='mb-4 text-3xl tracking-tight font-bold md:text-4xl text-text-1'>
                  Something's missing.
                </p>
                <p className='mb-4 text-lg font-light text-text-2'>
                  Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link
                  href='/'
                  className='inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 duration-300'>
                  Back to Homepage
                </Link>
              </div>
            </div>
          </section>
        </Flowbite>
      </body>
    </html>
  );
}
