'use client';

import * as React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { TabTitle, Tabs, TabsContent } from '@/components/ui/tabs';
import getImageURL, { cn } from '@/lib/utils';
import descArrays from '@/lib/Descriptions/Tags';

export interface IEditProfileProps {}

export default function EditProfile(props: IEditProfileProps) {
  const { data: session } = useSession();

  return (
    <div className='flex flex-1 mt-16 *:w-full *:max-w-2xl flex-col items-center gap-10 px-5 py-10 md:p-14 custom-scrollbar-bg overflow-scroll'>
      <div>
        <Button variant='ghost'>
          <IoArrowBack size={18} />
          <span className='small-medium lg:base-medium'>Back</span>
        </Button>
      </div>
      <div className='rounded-xl border border-slate-200 bg-foreground-1 shadow-sm dark:border-slate-700 dark:bg-dark-1'>
        <div className='flex relative space-y-4'>
          <div className='flex-start gap-4 p-8'>
            <div className='relative md:w-20 md:h-20 w-12 h-12 shrink-0'>
              <label htmlFor='file' className='cursor-pointer'>
                <Avatar className='size-20' src={getImageURL(session?.user.image!)} />
                <input type='file' id='file' className='hidden' />
              </label>

              <label
                htmlFor='file'
                className='md:p-1 p-0.5 rounded-full bg-slate-600 md:border-4 border-white absolute -bottom-2 -right-2 cursor-pointer dark:border-slate-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='md:w-4 md:h-4 w-3 h-3 fill-white'>
                  <path d='M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z'></path>
                  <path
                    fillRule='evenodd'
                    d='M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z'
                    clipRule='evenodd'></path>
                </svg>

                <input id='file' type='file' className='hidden' />
              </label>
            </div>
            <div className='flex flex-col'>
              <span className='h5-bold mb-2'>{session?.user.name}</span>
              <span className='small-regular text-text-2'>@{session?.user.name}</span>
            </div>
          </div>
        </div>

        <hr className='m-0 border-t border-gray-100 dark:border-slate-700' />

        <Tabs id='setting_tab' disableChevron>
          <TabTitle>General</TabTitle>
          <TabTitle>Social links</TabTitle>
          <TabTitle>Expertise</TabTitle>
          <TabTitle>Experience</TabTitle>
          <TabTitle>Repository</TabTitle>
          <TabTitle>Password</TabTitle>
        </Tabs>
      </div>

      <div className='mb-20 mt-6 text-sm font-medium text-gray-600 dark:text-white/80'>
        <TabsContent id='setting_tab'>
          <div>
            <div className='space-y-6'>
              <div className='md:flex items-center gap-10'>
                <label htmlFor='name' className='md:w-32 text-right'>
                  Name
                </label>
                <div className='flex-1 max-md:mt-4'>
                  <input
                    id='name'
                    type='text'
                    placeholder='Monroe'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    defaultValue={session?.user.name}
                  />
                </div>
              </div>

              <div className='md:flex items-center gap-10'>
                <label htmlFor='alias' className='md:w-32 text-right'>
                  Alias
                </label>
                <div className='flex-1 max-md:mt-4'>
                  <input
                    id='alias'
                    type='text'
                    placeholder='@monroe'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    defaultValue={session?.user.name}
                  />
                </div>
              </div>

              <div className='md:flex items-start gap-10'>
                <label htmlFor='about' className='md:w-32 text-right'>
                  About
                </label>
                <div className='flex-1 max-md:mt-4'>
                  <textarea
                    id='about'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    rows={5}
                    placeholder='Write something about yourself...'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4 mt-16'>
              <Button variant='destructive' className='button lg:px-6 bg-secondery max-md:flex-1'>
                Cancel
              </Button>
              <Button type='submit' className='button lg:px-6 bg-primary text-white max-md:flex-1'>
                Save <span className='ripple-overlay'></span>
              </Button>
            </div>
          </div>

          <div className='font-normal text-gray-400'>
            <div className='space-y-6 mt-8'>
              <div className='flex items-center gap-3'>
                <div className='bg-blue-50 rounded-full p-2 flex '>
                  <FaFacebook className='text-2xl text-blue-600' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.facebook.com/myname'
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-pink-50 rounded-full p-2 flex '>
                  <FaInstagram className='text-2xl text-pink-600' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.instagram.com/myname'
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-sky-50 rounded-full p-2 flex '>
                  <FaTwitter className='text-2xl text-sky-600' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.twitter.com/myname'
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-red-50 rounded-full p-2 flex '>
                  <FaYoutube className='text-2xl text-red-600' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.youtube.com/myname'
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-slate-50 rounded-full p-2 flex '>
                  <FaGithub className='text-2xl text-black' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.github.com/myname'
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='bg-slate-50 rounded-full p-2 flex '>
                  <FaLinkedin className='text-2xl text-blue-1' />
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                    placeholder='http://www.linkedin.com/myname'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4 mt-16'>
              <Button variant='destructive' className='button lg:px-6 bg-secondery max-md:flex-1'>
                Cancel
              </Button>
              <Button type='submit' className='button lg:px-6 bg-primary text-white max-md:flex-1'>
                Save
              </Button>
            </div>
          </div>

          <div className='flex-center flex-col'>
            <div className='flex flex-wrap gap-4'>
              {descArrays.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'itemAddTag border-[0.5px] border-border-1 select-none px-4 py-2'
                    // addTagArr.indexOf(item.title) !== -1 && 'active'
                  )}
                  onClick={() => {
                    // if (addTagArr.includes(item.title)) {
                    //   setAddTagArr(addTagArrTemp.filter((i) => i !== item.title));
                    //   return;
                    // } else {
                    //   setAddTagArr([...addTagArr, item.title]);
                    //   addTagArrTemp = [...addTagArr, item.title];
                    //   return;
                    // }
                  }}>
                  <div className='flex-start'>
                    <span className='*:size-5 mr-2'>{item.svg}</span>
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex items-center justify-center gap-4 mt-10'>
              <Button variant='destructive' className='button lg:px-6 bg-secondery max-md:flex-1'>
                Cancel
              </Button>
              <Button type='submit' className='button lg:px-6 bg-primary text-white max-md:flex-1'>
                Save
              </Button>
            </div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className='space-y-6'>
              <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
                <label className='md:w-40 text-right'> Current Password </label>
                <div className='flex-1 max-md:mt-4'>
                  <input
                    type='password'
                    placeholder='******'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                  />
                </div>
              </div>

              <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
                <label className='md:w-40 text-right'> New password </label>
                <div className='flex-1 max-md:mt-4'>
                  <input
                    type='password'
                    placeholder='******'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                  />
                </div>
              </div>

              <div className='md:flex items-center gap-16 justify-between max-md:space-y-3'>
                <label className='md:w-40 text-right'> Repeat password </label>
                <div className='flex-1 max-md:mt-4'>
                  <input
                    type='password'
                    placeholder='******'
                    className='w-full rounded-lg bg-foreground-1 border-none'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center gap-4 mt-16'>
              <Button variant='destructive' className='button lg:px-6 bg-secondery max-md:flex-1'>
                Cancel
              </Button>
              <Button type='submit' className='button lg:px-6 bg-primary text-white max-md:flex-1'>
                Save
              </Button>
            </div>
          </div>
        </TabsContent>
      </div>
    </div>
  );
}
