import Link from 'next/link';
import * as React from 'react';

export interface ITrendingArticleProps {}

export default function TrendingArticle(props: ITrendingArticleProps) {
  return (
    <div className='box p-5 px-6 bg-foreground-1'>
      <div className='flex items-baseline justify-between'>
        <h3 className='font-bold text-base'> Trending Articles</h3>
        <Link href='#' className='text-sm text-blue-500'>
          See all
        </Link>
      </div>

      <div className='mt-4 space-y-4'>
        <div>
          <Link href='blog-read.html'>
            <h4 className='duration-200 hover:opacity-80'>
              Interesting javaScript and CSS libraries you should be learn
            </h4>
          </Link>
          <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
            <div> 10 Jun 2022 </div>
            <div className='md:block hidden'>·</div>
            <div> 156.9K views</div>
          </div>
        </div>
        <div>
          <Link href='blog-read.html'>
            <h4 className='duration-200 hover:opacity-80'>
              Interesting javaScript and CSS libraries you should be learn
            </h4>
          </Link>
          <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
            <div> 10 Jun 2022 </div>
            <div className='md:block hidden'>·</div>
            <div> 156.9K views</div>
          </div>
        </div>
        <div>
          <Link href='blog-read.html'>
            <h4 className='duration-200 hover:opacity-80'>
              Interesting JavaScript and CSS libraries should Know About
            </h4>
          </Link>
          <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
            <div> 10 Jun 2022 </div>
            <div className='md:block hidden'>·</div>
            <div> 156.9K views</div>
          </div>
        </div>
        <div>
          <Link href='blog-read.html'>
            <h4 className='duration-200 hover:opacity-80'>
              Top amazing web demos and experiments should know about
            </h4>
          </Link>
          <div className='text-xs text-text-2 mt-2 flex items-center gap-2'>
            <div> 10 Jun 2022 </div>
            <div className='md:block hidden'>·</div>
            <div> 156.9K views</div>
          </div>
        </div>
      </div>
    </div>
  );
}
