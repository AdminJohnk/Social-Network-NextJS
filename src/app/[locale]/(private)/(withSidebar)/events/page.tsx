import { TabTitle, Tabs, TabsContent } from '@/components/ui/tabs';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoArrowRedo, IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IEventProps {
  params: {
    locale: string;
  };
}

export default function Event({ params: { locale } }: IEventProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className='ms-60 mt-16 max-lg/2:ms-0'>
      <div className='newsfeed px-5 py-5'>
        <main className='max-lg/2:ms-0'>
          <div className=''>
            <div className='page-heading'>
              <h1 className='page-title'> {t('Events')} </h1>

              <Tabs id='events-tabs' disableChevron>
                <TabTitle>{t('Suggestions')}</TabTitle>
                <TabTitle>{t('Popular')}</TabTitle>
                <TabTitle>{t('My events')}</TabTitle>
              </Tabs>
            </div>

            <TabsContent id='events-tabs' className='!border-none'>
              <div>
                {/* <!-- event featured --> */}
                <div className='relative' data-uk-slider='finite:true'>
                  <div className='uk-slider-container pb-1'>
                    <ul className='uk-slider-items grid-small'>
                      <li className='w-1/2 sm:w-1/3 lg:w-1/4'>
                        <div className='card'>
                          <Link href='/events/123'>
                            <div className='card-media h-32'>
                              <Image width={500} height={500} src='/images/events/img-3.jpg' alt='' />
                              <div className='card-overlay'></div>
                            </div>
                          </Link>
                          <div className='card-body'>
                            <p className='mb-1 text-xs font-medium text-blue-600'> {t('Next week')} </p>
                            <Link href='/events/123'>
                              <h4 className='card-title text-sm'> About Safety and Flight </h4>
                            </Link>
                            <Link href=''>
                              <p className='card-text mt-2 text-black'> Dubai </p>
                            </Link>
                            <div className='card-list-info mt-1 text-xs'>
                              <div> 26 {t('Interested')}</div>
                              <div className='hidden md:block'>·</div>
                              <div> 8 {t('Going')}</div>
                            </div>
                            <div className='flex gap-2'>
                              <button
                                type='button'
                                className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                                {t('Interested')}
                              </button>
                              <button
                                type='button'
                                className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                                <IoArrowRedo className='text-lg' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='w-1/2 sm:w-1/3 lg:w-1/4'>
                        <div className='card'>
                          <Link href='/events/123'>
                            <div className='card-media h-32'>
                              <Image width={500} height={500} src='/images/events/img-2.jpg' alt='' />
                              <div className='card-overlay'></div>
                            </div>
                          </Link>
                          <div className='card-body'>
                            <p className='mb-1 text-xs font-semibold text-teal-600'>{t('Opening')}</p>
                            <Link href='/events/123'>
                              <h4 className='card-title text-sm'> Wedding trend Ideas </h4>
                            </Link>
                            <Link href=''>
                              <p className='card-text mt-2 text-black'> Turkey </p>
                            </Link>
                            <div className='card-list-info mt-1 text-xs'>
                              <div> 20 {t('Interested')}</div>
                              <div className='hidden md:block'>·</div>
                              <div> 16 {t('Going')}</div>
                            </div>
                            <div className='flex gap-2'>
                              <button
                                type='button'
                                className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                                {t('Interested')}
                              </button>
                              <button
                                type='button'
                                className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                                <IoArrowRedo className='text-lg' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='w-1/2 sm:w-1/3 lg:w-1/4'>
                        <div className='card'>
                          <Link href='/events/123'>
                            <div className='card-media h-32'>
                              <Image width={500} height={500} src='/images/events/img-1.jpg' alt='' />
                              <div className='card-overlay'></div>
                            </div>
                          </Link>
                          <div className='card-body'>
                            <p className='mb-1 text-xs font-medium text-red-600'> WED JUL 10,2024 AT 10PM </p>
                            <Link href='/events/123'>
                              <h4 className='card-title text-sm'> The global creative </h4>
                            </Link>
                            <Link href=''>
                              <p className='card-text mt-2 text-black'> Japan </p>
                            </Link>
                            <div className='card-list-info mt-1 text-xs'>
                              <div> 15 {t('Interested')}</div>
                              <div className='hidden md:block'>·</div>
                              <div> 2 {t('Going')}</div>
                            </div>
                            <div className='flex gap-2'>
                              <button
                                type='button'
                                className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                                {t('Interested')}
                              </button>
                              <button
                                type='button'
                                className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                                <IoArrowRedo className='text-lg' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='w-1/2 sm:w-1/3 lg:w-1/4'>
                        <div className='card'>
                          <Link href='/events/123'>
                            <div className='card-media h-32'>
                              <Image width={500} height={500} src='/images/events/img-4.jpg' alt='' />
                              <div className='card-overlay'></div>
                            </div>
                          </Link>
                          <div className='card-body'>
                            <p className='mb-1 text-xs font-semibold text-teal-600'>{t('Opening')}</p>
                            <Link href='/events/123'>
                              <h4 className='card-title text-sm'> Perspective is everything </h4>
                            </Link>
                            <Link href=''>
                              <p className='card-text mt-2 text-black'> London </p>
                            </Link>
                            <div className='card-list-info mt-1 text-xs'>
                              <div> 20 {t('Interested')}</div>
                              <div className='hidden md:block'>·</div>
                              <div> 16 {t('Going')}</div>
                            </div>
                            <div className='flex gap-2'>
                              <button
                                type='button'
                                className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                                {t('Interested')}
                              </button>
                              <button
                                type='button'
                                className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                                <IoArrowRedo className='text-lg' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='w-1/2 sm:w-1/3 lg:w-1/4'>
                        <div className='card'>
                          <Link href='/events/123'>
                            <div className='card-media h-32'>
                              <Image width={500} height={500} src='/images/events/img-3.jpg' alt='' />
                              <div className='card-overlay'></div>
                            </div>
                          </Link>
                          <div className='card-body'>
                            <p className='mb-1 text-xs font-medium text-blue-600'> {t('Next week')} </p>
                            <Link href='/events/123'>
                              <h4 className='card-title text-sm'> About Safety and Flight </h4>
                            </Link>
                            <Link href=''>
                              <p className='card-text mt-2 text-black'> Dubai </p>
                            </Link>
                            <div className='card-list-info mt-1 text-xs'>
                              <div> 26 {t('Interested')}</div>
                              <div className='hidden md:block'>·</div>
                              <div> 8 {t('Going')}</div>
                            </div>
                            <div className='flex gap-2'>
                              <button
                                type='button'
                                className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                                {t('Interested')}
                              </button>
                              <button
                                type='button'
                                className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                                <IoArrowRedo className='text-lg' />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- slide nav icons --> */}
                  <Link className='nav-prev !top-20' href='' data-uk-slider-item='previous'>
                    <IoChevronBack className='text-2xl' />
                  </Link>
                  <Link className='nav-next !top-20' href='' data-uk-slider-item='next'>
                    <IoChevronForward className='text-2xl' />
                  </Link>
                </div>

                <div className='my-3 flex items-center justify-between sm:my-6 md:mt-10'>
                  <div>
                    <h2 className='text-xl font-semibold'> {t('Lists You May Like')} </h2>
                    <p className='text-sm font-normal leading-6 text-gray-500'>
                      {t('Find a group by browsing top categories')}.
                    </p>
                  </div>
                  <Link href='' className='hidden text-sm text-blue-500 sm:block'>
                    {t('See all')}
                  </Link>
                </div>

                {/* <!-- listing  slider --> */}
                <div className='relative mt-4' data-uk-slider='finite:true'>
                  <div className='uk-slider-container pb-1'>
                    <ul className='uk-slider-items grid-small'>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-1.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> Miami </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Hotels')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-2.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> Florida </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Hotels')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-3.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> London </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Hotels')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-4.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> Dubai </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Hotels')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-5.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> Turkey </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Restaurant')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className='w-1/2 sm:w-1/3 md:w-1/5'>
                        <Link href=''>
                          <div className='relative overflow-hidden rounded-lg'>
                            <Image
                              width={500}
                              height={500}
                              src='/images/events/listing-1.jpg'
                              alt=''
                              className='h-36 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 pt-10'>
                              <div className='p-5 text-white'>
                                <div className='text-sm font-light'> Miami </div>
                                <div className='mt-1.5 text-lg leading-3'> {t('Hotels')} </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- slide nav icons --> */}
                  <Link className='nav-prev' href='' data-uk-slider-item='previous'>
                    <IoChevronBack className='text-2xl' />
                  </Link>
                  <Link className='nav-next' href='' data-uk-slider-item='next'>
                    <IoChevronForward className='text-2xl' />
                  </Link>
                </div>

                <div className='mt-6 flex items-center justify-between py-3 text-black dark:text-white'>
                  <h3 className='text-xl font-semibold'> {t('Upcoming Events')} </h3>
                  <Link href='' className='text-sm text-blue-500'>
                    {t('See all')}
                  </Link>
                </div>

                {/* <!-- event grid --> */}
                <div className='mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  <div className='card'>
                    <Link href='/events/123'>
                      <div className='card-media h-32'>
                        <Image width={500} height={500} src='/images/events/img-1.jpg' alt='' />
                        <div className='card-overlay'></div>
                      </div>
                    </Link>
                    <div className='card-body'>
                      <p className='mb-1 text-xs font-medium text-black dark:text-red-600'>
                        WED JUL 10,2024 AT 10PM
                      </p>
                      <Link href='/events/123'>
                        <h4 className='card-title text-sm'> The global creative </h4>
                      </Link>
                      <Link href=''>
                        <p className='card-text mt-2 text-black'> Japan </p>
                      </Link>
                      <div className='card-list-info mt-1 text-xs'>
                        <div> 15 {t('Interested')}</div>
                        <div className='hidden md:block'>·</div>
                        <div> 2 {t('Going')}</div>
                      </div>
                      <div className='flex gap-2'>
                        <button
                          type='button'
                          className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                          {t('Interested')}
                        </button>
                        <button
                          type='button'
                          className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                          <IoArrowRedo className='text-lg' />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='card'>
                    <Link href='/events/123'>
                      <div className='card-media h-32'>
                        <Image width={500} height={500} src='/images/events/img-2.jpg' alt='' />
                        <div className='card-overlay'></div>
                      </div>
                    </Link>
                    <div className='card-body'>
                      <p className='mb-1 text-xs font-semibold text-teal-600'>{t('Opening')}</p>
                      <Link href='/events/123'>
                        <h4 className='card-title text-sm'> Wedding trend Ideas </h4>
                      </Link>
                      <Link href=''>
                        <p className='card-text mt-2 text-black'> Turkey </p>
                      </Link>
                      <div className='card-list-info mt-1 text-xs'>
                        <div> 20 {t('Interested')}</div>
                        <div className='hidden md:block'>·</div>
                        <div> 16 {t('Going')}</div>
                      </div>
                      <div className='flex gap-2'>
                        <button
                          type='button'
                          className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                          {t('Interested')}
                        </button>
                        <button
                          type='button'
                          className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                          <IoArrowRedo className='text-lg' />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='card'>
                    <Link href='/events/123'>
                      <div className='card-media h-32'>
                        <Image width={500} height={500} src='/images/events/img-3.jpg' alt='' />
                        <div className='card-overlay'></div>
                      </div>
                    </Link>
                    <div className='card-body'>
                      <p className='mb-1 text-xs font-medium text-black dark:text-red-600'>
                        WED JUL 10,2024 AT 10PM
                      </p>
                      <Link href='/events/123'>
                        <h4 className='card-title text-sm'> About Safety and Flight </h4>
                      </Link>
                      <Link href=''>
                        <p className='card-text mt-2 text-black'> Dubai </p>
                      </Link>
                      <div className='card-list-info mt-1 text-xs'>
                        <div> 26 {t('Interested')}</div>
                        <div className='hidden md:block'>·</div>
                        <div> 8 {t('Going')}</div>
                      </div>
                      <div className='flex gap-2'>
                        <button
                          type='button'
                          className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                          {t('Interested')}
                        </button>
                        <button
                          type='button'
                          className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                          <IoArrowRedo className='text-lg' />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='card'>
                    <Link href='/events/123'>
                      <div className='card-media h-32'>
                        <Image width={500} height={500} src='/images/events/img-4.jpg' alt='' />
                        <div className='card-overlay'></div>
                      </div>
                    </Link>
                    <div className='card-body'>
                      <p className='mb-1 text-xs font-semibold text-teal-600'>{t('Opening')}</p>
                      <Link href='/events/123'>
                        <h4 className='card-title text-sm'> Perspective is everything </h4>
                      </Link>
                      <Link href=''>
                        <p className='card-text mt-2 text-black'> London </p>
                      </Link>
                      <div className='card-list-info mt-1 text-xs'>
                        <div> 20 {t('Interested')}</div>
                        <div className='hidden md:block'>·</div>
                        <div> 16 {t('Going')}</div>
                      </div>
                      <div className='flex gap-2'>
                        <button
                          type='button'
                          className='button flex-1 bg-blue-1 text-white duration-300 hover:bg-blue-2'>
                          {t('Interested')}
                        </button>
                        <button
                          type='button'
                          className='button !w-auto bg-foreground-2 duration-300 hover:bg-hover-2'>
                          <IoArrowRedo className='text-lg' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </main>
      </div>
    </div>
  );
}
