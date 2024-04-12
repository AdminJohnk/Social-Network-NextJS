'use client';

import GithubColors from 'github-colors';
import { IRepository } from '@/types';
import { IoStar } from 'react-icons/io5';
import { BiGitRepoForked } from 'react-icons/bi';
import { RiGitRepositoryLine } from 'react-icons/ri';

import Image from 'next/image';
import { Link } from '@/navigation';

const Repository = (item: IRepository, index: number) => {
  const colorLanguage = GithubColors.get(item.languages).color;

  return (
    <Link
      key={index}
      className='mb-5 border-b border-border-1'
      style={{
        width: '48%'
      }}
      href={item.html_url}
      target='_blank'
    >
      <div className='top flex-start'>
        <RiGitRepositoryLine className='text-text-1 size-6'/>
        <span
          className='name ml-2 text-text-1'
          style={{
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          {item.name}
        </span>
        <span
          className='rounded-lg ml-3 text-text-3 border-border-1'
          style={{
            fontSize: '0.8rem',
            padding: '0.1rem 0.5rem'
          }}
        >
          {item.private ? 'Private' : 'Public'}
        </span>
      </div>
      <div className='bottom mt-3 flex items-center text-text-2'>
        <div className='language mr-4 flex items-center'>
          <span className='mr-2 pb-2 text-4xl' style={{ color: colorLanguage }}>
            •
          </span>
          <span>{item.languages}</span>
        </div>
        <span className='star mr-3 text-text-3 flex-start'>
          <IoStar />
          <span className='ml-1'>{item.stargazers_count}</span>
        </span>
        <span className='fork text-text-3 flex-start'>
          <BiGitRepoForked />
          <span className='ml-1'>{item.forks_count}</span>
        </span>
      </div>
    </Link>
  );
};

export default Repository;
