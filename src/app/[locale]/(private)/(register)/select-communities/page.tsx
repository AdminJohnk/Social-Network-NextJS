'use client';

import { } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaUserFriends } from 'react-icons/fa';

import { useRouter } from '@/navigation';
import { getImageURL } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SlideHeader from '@/components/pages/Register/SlideHeader';

export interface ISelectCommunitiesProps {
}

export default function SelectCommunities({ }: ISelectCommunitiesProps) {
  const t = useTranslations();
  const router = useRouter();

  const communityArray = [
    {
      groupName: 'Blockchain',
      data: [
        {
          id: 1,
          name: 'Web3Dev',
          image:
            'https://images-platform.99static.com/m0AWL_NkWCDqUhV58lKUMLt1le4=/192x192:1728x1728/500x500/top/smart/99designs-contests-attachments/133/133347/attachment_133347677',
          members: 3508,
          about:
            'Blockchain is a decentralized, distributed, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the collusion of the network.'
        },
        {
          id: 2,
          name: 'Web3 & Blockchains',
          image:
            'https://img.freepik.com/premium-vector/blockchain-line-icon-logo-concept-dark-background_516670-196.jpg',
          members: 3648,
          about: 'Resource about Web3 and Blockchains development, design, and business.'
        }
      ]
    },
    {
      groupName: 'DevOps & Infrastructure',
      data: [
        {
          id: 1,
          name: 'Kubernetes Zone',
          image: 'https://foghornconsulting.com/wp-content/uploads/2022/01/kubernetes-1.png',
          members: 9394,
          about: 'Sharing kubernetes tips and tricks, and other infrastructure related topics.'
        },
        {
          id: 2,
          name: 'AWS',
          image: 'https://ih1.redbubble.net/image.2107976074.2036/st,small,507x507-pad,600x600,f8f8f8.jpg',
          members: 3033,
          about: 'A place to discuss all things AWS, including the AWS SDKs, AWS CLI, and more.'
        },
        {
          id: 3,
          name: 'DevOps',
          image: 'https://cdn.dribbble.com/users/13574/screenshots/9711275/logo-devops.png',
          members: 3835,
          about: 'DevOps Community'
        }
      ]
    },
    {
      groupName: 'Front End',
      data: [
        {
          id: 1,
          name: 'React.JS',
          image:
            'https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png',
          members: 14203,
          about: 'A JavaScript library for building user interfaces'
        },
        {
          id: 2,
          name: 'Vue.JS',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png',
          members: 5310,
          about: 'The Progressive JavaScript Framework'
        },
        {
          id: 3,
          name: 'Angular',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
          members: 1776,
          about: 'Angular is a platform for building mobile and desktop web applications.'
        },
        {
          id: 4,
          name: 'HTML & CSS',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ70hL-7iNj-Vju1OiqKFn898rvclzwPKsNA&usqp=CAU',
          members: 2947,
          about: 'HTML & CSS'
        }
      ]
    },
    {
      groupName: 'Back End',
      data: [
        {
          id: 1,
          name: 'Node.JS',
          image: 'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg',
          members: 3508,
          about:
            'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
        },
        {
          id: 2,
          name: 'GraphQL',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png?20161105194737',
          members: 5310,
          about:
            'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.'
        }
      ]
    }
  ];

  return (
    <div>
      <SlideHeader step={3} />
      <div className='mt-4'>
        <span className='font-bold text-3xl max-md:text-lg'> {t('Here are some relevant communities for you')}.</span>

        <div className='*:mt-4'>
          {communityArray.map((item, index) => (
            <div key={index}>
              <span className='font-semibold'>{item.groupName}</span>
              <div className='flex flex-wrap gap-4 mt-2'>
                {item.data.map((comInfo, index) => (
                  <div key={index} className='w-full'>
                    <div className='bg-foreground-1 rounded-lg p-4'>
                      <div className='flex justify-between'>
                        <div className='flex-start'>
                          <span className='*:size-8 mr-2 bg-foreground-2 rounded-md p-2'>
                            <Image width={500} height={500} src={getImageURL(comInfo.image)} className='w-24 h-24' alt='' />
                          </span>
                          <div>
                            <div className='flex items-center gap-2'>
                              <span className='font-semibold'>{comInfo.name}</span>
                              <FaUserFriends className='text-white/75' />
                              <span className='text-white/75'>{comInfo.members}</span>
                            </div>
                            <p className='text-white/75'>
                              {comInfo.about.length > 100
                                ? comInfo.about.slice(0, 100) + '...'
                                : comInfo.about}
                            </p>
                          </div>
                        </div>
                        <Button >{t('Join')}</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className='mt-2 flex justify-end p-4'>
            <div className='*:mr-2'>
              <Button variant={'ghost'} onClick={() => router.push('/select-interest')}>{t('Back')}</Button>
              <Button onClick={() => router.push('/follow-people')} >{t('Continue')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
