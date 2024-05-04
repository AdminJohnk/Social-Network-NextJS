'use client';

import Link from 'next/link';
import { JSDOM } from 'jsdom';
import axios from 'axios';

const extractMetaTags = async (url: string) => {
  try {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const metaTags = Array.from(document.querySelectorAll('meta')).reduce(
      (tags: any, meta) => {
        const name =
          meta.getAttribute('name') ||
          meta.getAttribute('property') ||
          meta.getAttribute('itemprop');
        const content = meta.getAttribute('content');

        if (name && content) {
          tags[name] = content;
        }

        return tags;
      },
      {}
    );

    return {
      title:
        document.title || metaTags['og:title'] || metaTags['twitter:title'],
      description:
        metaTags.description ||
        metaTags['og:description'] ||
        metaTags['twitter:description'],
      image: metaTags.image || metaTags['og:image'] || metaTags['twitter:image']
    };
  } catch (error) {
    console.error('Error fetching Open Graph details', error);
  }
};

export interface ILinkPreviewProps {
  url: string;
}

export default async function LinkPreview({ url }: ILinkPreviewProps) {
  const data = await extractMetaTags(url);

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <Link
      href={'http://www.google.com'}
      target='_blank'
      className='text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]'
      style={{
        textDecoration: 'none'
      }}
    >
      <div className='object-cover h-full'>
        <img
          src={data.image}
          alt='Link Preview'
          className='object-cover h-full w-[340px] m-0'
        />
      </div>
      <div className='p-4 w-[60%]'>
        <h3 className='text-3xl font-bold leading-[2rem] mb-2 '>
          {data.title}
        </h3>
        <p className='text-base  line-clamp-3 mb-2 '>{data.description}</p>
        <span className='mt-3 opacity-50 text-xs'>&nbsp;{url}</span>
      </div>
    </Link>
  );
}
