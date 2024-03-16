import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IBlogSlideListProps {}

export default function BlogSlideList(props: IBlogSlideListProps) {
  const t = useTranslations();
  return (
    <div tabIndex={-1} data-uk-slider='finite:true'>
      <div className='uk-slider-container pb-1'>
        <ul className='uk-slider-items grid-small'>
          <li className='sm:w-1/3 w-1/2'>
            <div className='card'>
              <Link href='/blogs/123'>
                <div className='card-media h-32'>
                  <Image src='/images/blog/img-1.jpg' alt='' width={1000} height={1000} />
                  <div className='card-overly'></div>
                </div>
              </Link>
              <div className='card-body'>
                <Link href='/blogs/123'>
                  <h4 className='card-title text-sm line-clamp-2'>
                    Top amazing web demos and experiments in 2024 should know about
                  </h4>
                </Link>
                <p className='card-text text-xs mt-1.5'>
                  <Link href='#'> Jesse Steeve </Link>
                </p>
                <div className='card-list-info mt-1 text-xs'>
                  <div> 10 Jun 2022 </div>
                  <div className='md:block hidden'>·</div>
                  <div> 156.9K </div>
                </div>
              </div>
            </div>
          </li>
          <li className='sm:w-1/3 w-1/2'>
            <div className='card'>
              <Link href='/blogs/123'>
                <div className='card-media h-32'>
                  <Image src='/images/blog/img-2.jpg' alt='' width={1000} height={1000} />
                  <div className='card-overly'></div>
                </div>
              </Link>
              <div className='card-body'>
                <Link href='/blogs/123'>
                  <h4 className='card-title text-sm line-clamp-2'>
                    Awesome web dev tools and resources for 2024 in 30 minutes
                  </h4>
                </Link>
                <p className='card-text text-xs mt-1.5'>
                  <Link href='#'> John Michael</Link>
                </p>
                <div className='card-list-info mt-1 text-xs'>
                  <div> 10 Jun 2022 </div>
                  <div className='md:block hidden'>·</div>
                  <div> 156.9K {t('views')}</div>
                </div>
              </div>
            </div>
          </li>
          <li className='sm:w-1/3 w-1/2'>
            <div className='card'>
              <Link href='/blogs/123'>
                <div className='card-media h-32'>
                  <Image src='/images/blog/img-3.jpg' alt='' width={1000} height={1000} />
                  <div className='card-overly'></div>
                </div>
              </Link>
              <div className='card-body'>
                <Link href='/blogs/123'>
                  <h4 className='card-title text-sm line-clamp-2'>
                    Interesting JavaScript and CSS libraries should Know About
                  </h4>
                </Link>
                <p className='card-text text-xs mt-1.5'>
                  <Link href='#'> Monroe Parker </Link>
                </p>
                <div className='card-list-info mt-1 text-xs'>
                  <div> 10 Jun 2022 </div>
                  <div className='md:block hidden'>·</div>
                  <div> 156.9K {t('views')}</div>
                </div>
              </div>
            </div>
          </li>
          <li className='sm:w-1/3 w-1/2'>
            <div className='card'>
              <Link href='/blogs/123'>
                <div className='card-media h-32'>
                  <Image src='/images/blog/img-4.jpg' alt='' width={1000} height={1000} />
                  <div className='card-overly'></div>
                </div>
              </Link>
              <div className='card-body'>
                <Link href='/blogs/123'>
                  <h4 className='card-title text-sm line-clamp-2'>
                    Interesting javaScript and CSS libraries you should be learn
                  </h4>
                </Link>
                <p className='card-text text-xs mt-1.5'>
                  <Link href='#'> Martin Gray </Link>
                </p>
                <div className='card-list-info mt-1 text-xs'>
                  <div> 10 Jun 2022 </div>
                  <div className='md:block hidden'>·</div>
                  <div> 156.9K {t('views')}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <Link className='nav-prev !top-24' href='#' data-uk-slider-item='previous'>
        <IoChevronBack />
      </Link>
      <Link className='nav-next !top-24' href='#' data-uk-slider-item='next'>
        <IoChevronForward />
      </Link>
    </div>
  );
}
