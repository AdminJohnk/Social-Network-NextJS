/* eslint-disable @next/next/no-img-element */
'use client'
import { } from 'react';

import { IonIcon } from '@ionic/react';
import {
    chevronForwardOutline,
    chevronBack,
    personOutline,
    bookmarkOutline,
    settingsOutline,
    logOutOutline,
    pricetagsOutline,
    camera,
    cameraOutline,
    ellipsisHorizontal,
    playOutline,
    flagOutline,
    shareOutline,
    stopCircleOutline,
    heart,
    addCircle,
    chatbubbleEllipses,
    chatbubbleEllipsesOutline,
    heartCircle,
    heartOutline,
    notificationsOffOutline,
    timeOutline,
    image,
    happy
} from 'ionicons/icons';

import { IoCameraOutline, IoPlayOutline, IoPricetagsOutline } from 'react-icons/io5'
import Link from 'next/link';

import { Dropdown, Tabs, CustomFlowbiteTheme } from 'flowbite-react';


const customTabsTheme: CustomFlowbiteTheme['tabs'] = {
    'tablist': {
        'styles': {
            "underline": "",
        },
        'tabitem': {
            "base": "flex items-center justify-center p-4 rounded-b-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none",
            'styles': {
                'underline': {
                    'base': 'border-t-2 border-transparent',
                    'active': {
                        "on": "text-cyan-600 rounded-b-lg border-t-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                        "off": "border-t-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    }
                }
            }
        }
    },
    'tabpanel': ''
};
const Profile = () => {
    return (
        <>
            <div id="wrapper">

                {/* <!-- main contents --> */}
                <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]">

                    <div className="main__inner">

                        {/* <!-- profile  --> */}
                        <div className="py-6 relative">

                            <div className="flex md:gap-16 gap-4 max-md:flex-col">
                                <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                                    <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
                                        <img src="assets/images/avatars/avatar-6.jpg" alt="" className="w-full h-full absolute object-cover" />
                                    </div>
                                    <button type="button" className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"><IonIcon icon={camera} className="text-2xl text-black"></IonIcon></button>
                                </div>
                                <div className="max-w-2x flex-1">
                                    <h3 className="md:text-xl text-base font-semibold text-black dark:text-white"> Monroe Parker </h3>

                                    <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">@Monroepark</p>

                                    <p className="text-sm mt-2 md:font-normal font-light"> I love beauty and emotion. 🥰 I’m passionate about photography and learning. 📚 I explore genres and styles. 🌈 I think photography is storytelling. 📖 I hope you like and feel my photos. 😊</p>

                                    <p className="mt-2 space-x-2 text-gray-500 text-sm hidden" style={{ marginTop: '11px' }}><Link href="/#" className="inline-block">Travel</Link> . <Link href="/#" className="inline-block">Business</Link> . <Link href="/#" className="inline-block">Technology</Link> </p>

                                    <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
                                        <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                                            <div>
                                                <p>Posts</p>
                                                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">162</h3>
                                            </div>
                                            <div>
                                                <p>Following</p>
                                                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">14,260</h3>
                                            </div>
                                            <div>
                                                <p>Followers</p>
                                                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">8,542</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <button type="submit" className="button text-gray-600 bg-slate-200 hidden">Follow</button>
                                            <button type="button" className="button bg-pink-100 text-pink-600 border border-pink-200">Unfollow</button>
                                            <button type="submit" className="button bg-pink-600 text-white">Message</button>
                                            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <button
                                                className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon></button>}>
                                                <div className="w-[240px]">
                                                    <Dropdown.Item>
                                                        <Link href="/#"> <IonIcon className=" text-xl" icon={pricetagsOutline}></IonIcon> Unfollow </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link href="/#"> <IonIcon className=" text-xl" icon={timeOutline} ></IonIcon> Mute story </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link href="/#">
                                                            <IonIcon className=" text-xl" icon={flagOutline} ></IonIcon> Report </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link href="/#">
                                                            <IonIcon className=" text-xl" icon={shareOutline}></IonIcon> Share profile </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item>
                                                        <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                            <IonIcon className="text-xl" icon={stopCircleOutline}></IonIcon> Block </Link>
                                                    </Dropdown.Item>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="mt-10">

                            {/* <!-- sticky tabs --> */}

                            <div className="flex justify-center flex-wrap -mb-px border-t border-gray-200 dark:border-gray-700">
                                <Tabs style={'underline'} className='gap-2' theme={customTabsTheme}>
                                    <Tabs.Item className='ring-0' active title='Post' icon={IoCameraOutline}>  </Tabs.Item>
                                    <Tabs.Item active title='Reels' icon={IoPlayOutline}>  </Tabs.Item>
                                    <Tabs.Item active title='Tagged' icon={IoPricetagsOutline}>  </Tabs.Item>
                                </Tabs>
                            </div>

                            <div id="story_tab" className="uk-switcher">


                                {/* <!-- Post list --> */}
                                <div>
                                    {/* <!-- highest slider post --> */}
                                    <div className="mt-8">
                                        {/* <!-- post heading --> */}
                                        <div className="flex items-center justify-between py-3">
                                            <h1 className="text-xl font-bold text-black dark:text-white">Highths</h1>

                                            <button type="button" className="lg:hidden">
                                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="relative mt-5" tabIndex={-1} uk-slider="autoplay: true;finite: true">

                                            <div className="overflow-hidden uk-slider-container py-10">

                                                <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]" uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50" uk-lightbox="">
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 max-lg:hidden" uk-scrollspy-className="uk-animation-fade">
                                                        <div className="flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600">
                                                            <IonIcon icon={addCircle} className="text-4xl text-teal-900"></IonIcon>
                                                            <div className="mt-1 font-semibold">Add New</div>
                                                        </div>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="/assets/images/avatars/avatar-lg-1.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-1.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="/assets/images/avatars/avatar-lg-2.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-2.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="/assets/images/avatars/avatar-lg-3.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-3.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="/assets/images/avatars/avatar-lg-4.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-4.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="/assets/images/avatars/avatar-lg-5.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-5.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse"></div>
                                                    </li>
                                                </ul>

                                            </div>

                                            <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="previous"> <IonIcon icon={chevronBack} className="text-2xl"></IonIcon></button>
                                            <button type="button" className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="next"> <IonIcon icon={chevronForwardOutline} className="text-2xl"></IonIcon></button>

                                        </div>

                                    </div>


                                    {/* <!-- post list  --> */}

                                    <div className="mt-8">

                                        {/* <!-- post heading --> */}
                                        <div className="flex items-center justify-between py-3">
                                            <h1 className="text-xl font-bold text-black dark:text-white">Posts</h1>

                                            <Link href="/#" className="text-sm font-semibold flex items-center gap-2">
                                                Show achieved  <IonIcon icon={chevronForwardOutline}></IonIcon>
                                            </Link>
                                        </div>

                                        {/* <!-- Post list --> */}
                                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-2.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-5.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-2.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={heartCircle}></IonIcon> 152</div>
                                                                <div className="flex items-center gap-2">
                                                                    <IonIcon className="text-2xl" icon={chatbubbleEllipses}></IonIcon> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* <!-- placeholders --> */}
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                                        </div>


                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                                    </div>

                                </div>



                                {/* <!-- Reels  list --> */}
                                <div className="pt-16">


                                    <div className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 14
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 32
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 46
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon>16
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-5.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 38
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 33
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 62
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 42
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 18
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 29
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>


                                        {/* <!-- placeholders --> */}
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                                    </div>


                                </div>





                                {/* <!-- short list --> */}
                                <div className="pt-16">


                                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">


                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Monroe Parker </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Jesse Steeve </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Martin Gray </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> John Michael </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Alexia stella </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-5.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Monroe Parker </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Jesse Steeve </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> Martin Gray </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="/profile">
                                                        <h4 className="text-black dark:text-white"> John Michael </h4>
                                                    </Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </Link>
                                                            <Link href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </Link>
                                                            <hr />
                                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={heartOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico"> <IonIcon className="md:text-2xl text-lg" icon={chatbubbleEllipsesOutline}></IonIcon> </button>
                                                <button type="button" className="button__ico ml-auto"> <IonIcon className="md:text-2xl text-lg" icon={bookmarkOutline}></IonIcon> </button>
                                            </div>

                                        </div>


                                        {/* <!-- placeholders --> */}
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>


                </main>

            </div>

            {/* <!-- post preview modal --> */}
            <div className="hidden lg:p-20 max-lg:!items-start" id="preview_modal" uk-modal="">

                <div className="uk-modal-dialog tt relative mx-auto overflow-hidden shadow-xl rounded-lg lg:flex items-center ax-w-[86rem] w-full lg:h-[80vh]">

                    {/* <!-- image previewer --> */}
                    <div className="lg:h-full lg:w-[calc(100vw-400px)] w-full h-96 flex justify-center items-center relative">

                        <div className="relative z-10 w-full h-full">
                            <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover absolute" />
                        </div>

                        {/* <!-- close button --> */}
                        <button type="button" className="bg-white rounded-full p-2 absolute right-0 top-0 m-3 uk-animation-slide-right-medium z-10 dark:bg-slate-600 uk-modal-close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>

                    {/* <!-- right sidebar --> */}
                    <div className="lg:w-[400px] w-full bg-white h-full relative  overflow-y-auto shadow-xl dark:bg-dark2 flex flex-col justify-between">

                        <div className="p-5 pb-0">

                            {/* <!-- story heading --> */}
                            <div className="flex gap-3 text-sm font-medium">
                                <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-9 h-9 rounded-full" />
                                <div className="flex-1">
                                    <h4 className="text-black font-medium dark:text-white"> Steeve </h4>
                                    <div className="text-gray-500 text-xs dark:text-white/80"> 2 hours ago</div>
                                </div>

                                {/* <!-- dropdown --> */}
                                <div className="-m-1">
                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                    <div className="w-[253px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true">
                                        <nav>
                                            <Link href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline} ></IonIcon> Add to favorites </Link>
                                            <Link href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={notificationsOffOutline}></IonIcon> Mute Notification </Link>
                                            <Link href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report this post </Link>
                                            <Link href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share your profile </Link>
                                            <hr />
                                            <Link href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Unfollow </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <p className="font-normal text-sm leading-6 mt-4"> Photography is the art of capturing light with a camera. it can be fun, challenging. It can also be a hobby, a passion. 📷 </p>

                            <div className="shadow relative -mx-5 px-5 py-3 mt-3">
                                <div className="flex items-center gap-4 text-xs font-semibold">
                                    <div className="flex items-center gap-2.5">
                                        <button type="button" className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"> <IonIcon className="text-lg" icon={heart}></IonIcon> </button>
                                        <Link href="/#">1,300</Link>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button type="button" className="button__ico bg-slate-100 dark:bg-slate-700"> <IonIcon className="text-lg" icon={chatbubbleEllipses}></IonIcon> </button>
                                        <span>260</span>
                                    </div>
                                    <button type="button" className="button__ico ml-auto"> <IonIcon className="text-xl" icon={shareOutline}></IonIcon> </button>
                                    <button type="button" className="button__ico"> <IonIcon className="text-xl" icon={bookmarkOutline}></IonIcon> </button>
                                </div>
                            </div>

                        </div>

                        <div className="p-5 h-full overflow-y-auto flex-1">

                            {/* <!-- comment list --> */}
                            <div className="relative text-sm font-medium space-y-5">

                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Steeve </Link>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </Link>
                                        <p className="mt-0.5"> You captured the moment.😎 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Alexia </Link>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> John  </Link>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Michael </Link>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </Link>
                                        <p className="mt-0.5"> Awesome. 😊😢 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Jesse </Link>
                                        <p className="mt-0.5"> Well done 🎨📸 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Steeve </Link>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Alexia </Link>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> John  </Link>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Michael </Link>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <Link href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </Link>
                                        <p className="mt-0.5"> Awesome. 😊😢 </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="bg-white p-3 text-sm font-medium flex items-center gap-2">

                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />

                            <div className="flex-1 relative overflow-hidden ">
                                <textarea placeholder="Add Comment...." rows={1} className="w-full resize-  px-4 py-2 focus:!border-transparent focus:!ring-transparent resize-y"></textarea>

                                <div className="flex items-center gap-2 absolute bottom-0.5 right-0 m-3">
                                    <IonIcon className="text-xl flex text-blue-700" icon={image}></IonIcon>
                                    <IonIcon className="text-xl flex text-yellow-500" icon={happy}></IonIcon>
                                </div>

                            </div>

                            <button type="submit" className="hidden text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Replay</button>

                        </div>

                    </div>

                </div>

            </div>

            {/* <!-- create status --> */}
            <div className="hidden lg:p-20" id="create-status" uk-modal="">

                <div className="uk-modal-dialog tt relative overflow-hidden mx-auto bg-white p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">

                    <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
                        <h2 className="text-sm font-medium"> Create Status </h2>

                        {/* <!-- close button --> */}
                        <button type="button" className="button__ico absolute top-0 right-0 m-2.5 uk-modal-close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>

                    <div className="space-y-5 mt-7">

                        <div>
                            <label htmlFor='' className="text-base">What do you have in mind? </label>
                            <input type="text" className="w-full mt-3" />
                        </div>

                        <div>
                            <div className="w-full h-72 relative border1 rounded-lg overflow-hidden bg-[url('/assets/images/ad_pattern.png')] bg-repeat">

                                <label htmlFor="createStatusUrl" className="flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60">
                                    <input id="createStatusUrl" type="file" className="hidden" accept="image/png, image/jpeg" />
                                    <IonIcon icon={image} name="image" className="text-3xl text-teal-600"></IonIcon>
                                    <span className="text-white mt-2">Browse to Upload image </span>
                                </label>

                                <img id="createStatusImage" src="#" alt="Uploaded Image" style={{ display: 'none' }} className="w-full h-full absolute object-cover" />

                            </div>

                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex items-start gap-2">
                                <IonIcon icon={timeOutline} className="text-3xl text-sky-600  rounded-full bg-blue-50 dark:bg-transparent"></IonIcon>
                                <p className="text-sm text-gray-500 font-medium"> Your Status will be available <br /> for <span className="text-gray-800"> 24 Hours</span> </p>
                            </div>

                            <button type="button" className="button bg-blue-500 text-white px-8"> Create</button>

                        </div>

                    </div>

                </div>

            </div>

            {/* <!-- create post modal --> */}
            <div className="hidden lg:p-20 max-lg:!items-start" id="create-post" uk-modal="">

                <div className="uk-modal-dialog tt relative mx-auto bg-white shadow-xl rounded-lg max-lg:w-full dark:bg-dark2">

                    {/* <!-- This is a switcher for multiple tabs. Each switcher tab should have the same number of tabs. https://getuikit.com/docs/switcher--> */}
                    <ul className="hidden" uk-switcher="connect: .posTabs">

                        {/* <!-- tab 1 --> */}
                        <li><Link href="/#">...</Link></li>

                        {/* <!-- tab 2 --> */}
                        <li><Link href="/#">...</Link></li>

                        {/* <!-- tab 3 --> */}
                        <li><Link href="/#">...</Link></li>

                    </ul>

                    {/* <!-- card header --> */}
                    <ul className="uk-switcher posTabs p-3.5 border-b text-center text-sm font-semibold text-black dark:text-white dark:border-slate-700">

                        {/* <!-- tab 1 --> */}
                        <li>
                            <div> Upload Photo</div>
                            <Link href="/#" className="absolute top-0 m-3 right-1 text-blue-600" uk-switcher-item="next"> Next</Link>
                        </li>

                        {/* <!-- tab 2 --> */}
                        <li>
                            <Link href="/#" className="absolute top-0 m-3.5 left-0" uk-switcher-item="previous">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            </Link>
                            <div> Filter Your Photo </div>
                            <Link href="/#" className="absolute top-0 m-3.5 right-1 text-blue-600" uk-switcher-item="next"> Next</Link>
                        </li>

                        {/* <!-- tab 3 --> */}
                        <li>
                            <Link href="/#" className="absolute top-0 m-3.5 left-0" uk-switcher-item="previous">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            </Link>
                            <div> Permission Photo </div>

                            {/* <!-- submit button --> */}
                            <button type="button" className="text-white bg-blue-600 rounded-lg py-1.5 px-5 text-sm absolute top-0 m-2.5 right-0 uk-animation-slide-right-small"> Share </button>
                        </li>

                    </ul>

                    <div className="lg:inline-flex">

                        {/* <!-- photo upload --> */}
                        <div className="lg:w-[600px] w-full">

                            <div className="w-full lg:h-[600px] h-80 relative overflow-hidden flex justify-center items-center">

                                <label htmlFor="addPostUrl" className="w-full h-full absolute inset-0 z-10 hover: cursor-pointer">
                                    <input id="addPostUrl" type="file" className="hidden" accept="image/png, image/jpeg" />
                                </label>

                                <div className="space-y-4 absolute flex flex-col justify-center" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true">

                                    <div uk-scrollspy-className="uk-animation-scale-up">
                                        <svg className="mx-auto text-gray-600 dark:text-white" width="96" height="77" role="img" viewBox="0 0 97.6 77.3"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                                    </div>
                                    <div className=" mx-auto" uk-scrollspy-className="uk-animation-slide-bottom-small">
                                        <button type="button" className="text-white bg-blue-600 rounded-lg py-1.5 px-4 text-sm dark:bg-white/5"> Select from the Computer</button>
                                    </div>

                                </div>

                                <img id="addPostImage" src="#" alt="Uploaded Image" style={{ display: "none" }} className="w-full h-full absolute object-cover fff" />

                            </div>


                        </div>

                        {/* <!-- right sidebar --> */}
                        <div className="relative w-auto border-l dark:border-slate-700">

                            <ul className="uk-switcher posTabs">

                                {/* <!-- tab 1 --> */}
                                <li> </li>

                                {/* <!-- tab 2 Filter Your Photo--> */}
                                <li>

                                    <div className="lg:w-[300px] lg:max-h-[600px] overflow-y-auto before:uk-animation-slide-right-small">

                                        <div className="p-3.5">

                                            {/* <!-- tabs --> */}
                                            <ul className="flex p-0.5 text-center text-xs font-medium text-gray-700 border rounded-md bg-slate-100 dark:text-white dark:border-slate-700 dark:bg-white/5" uk-switcher>
                                                <li className="flex-1"> <Link href="/#" className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10">Filters</Link></li>
                                                <li className="flex-1"> <Link href="/#" className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10">Adjustments</Link></li>
                                            </ul>

                                            <div className="uk-switcher">

                                                {/* <!-- filter slider --> */}
                                                <div className="space-y-8 py-6 p-1 text-sm font-medium text-gray-700 dark:text-gray-200">

                                                    <div>
                                                        <label htmlFor="range1" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range1" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="range2" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range2" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="range3" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range3" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="range4" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range4" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="range5" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range5" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="range6" className="mb-2 inline-block"> Example range </label>
                                                        <input type="range" min="0" max="6" id="range6" className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700" />
                                                    </div>

                                                </div>

                                                {/* <!-- image effect list --> */}
                                                <div>

                                                    <div className="grid grid-cols-3 gap-4 mt-3 text-xs text-center font-light" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 50;repeat:true">

                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: brightness-125">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover brightness-125" />
                                                            </div>
                                                            <span className="block mt-2">Brightness</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: contrast-150">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover contrast-150" />
                                                            </div>
                                                            <span className="block mt-2">Contrast</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: grayscale">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover grayscale" />
                                                            </div>
                                                            <span className="block mt-2">Grayscale</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: hue-rotate-60">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover hue-rotate-90" />
                                                            </div>
                                                            <span className="block mt-2">Hue</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: invert">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover invert" />
                                                            </div>
                                                            <span className="block mt-2">Invert</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: saturate-150">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover saturate-150" />
                                                            </div>
                                                            <span className="block mt-2">Saturate</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: sepia">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover sepia" />
                                                            </div>
                                                            <span className="block mt-2">Sepia</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: brightness-125">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover brightness-125" />
                                                            </div>
                                                            <span className="block mt-2">Brightness</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: grayscale">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover contrast" />
                                                            </div>
                                                            <span className="block mt-2">Contrast</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: grayscale">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover grayscale" />
                                                            </div>
                                                            <span className="block mt-2">Grayscale</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: hue-rotate-60">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover hue-rotate-60" />
                                                            </div>
                                                            <span className="block mt-2">Hue</span>
                                                        </div>
                                                        <div className="group cursor-pointer" uk-toggle="target: #addPostImage; cls: invert">
                                                            <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                                                <img src="assets/images/affect.jpg" alt="" className="rounded w-full h-20 object-cover invert" />
                                                            </div>
                                                            <span className="block mt-2">Invert</span>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </li>

                                {/* <!-- tab 3 Permission Photo--> */}
                                <li>

                                    <div className="lg:w-[300px] lg:max-h-[600px] overflow-y-auto uk-animation-fade">

                                        <textarea name="" id="" rows={4} placeholder="What is going on.." className="w-full !p-4 !rounded-none"></textarea>

                                        <ul className="divide-y divide-gray-100 dark:divide-slate-700" uk-nav="multiple: true">

                                            <li>

                                                <div className="flex items-center justify-between py-2 px-3.5">
                                                    <input type="text" placeholder="Add locations" className="font-medium text-sm w-full !bg-transparent !px-0 focus:!border-transparent focus:!ring-transparent" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>

                                            </li>

                                            <li className="uk-parent uk-open">
                                                <Link href="/#" className="flex items-center justify-between py-2 px-3.5 group " aria-expanded="true">
                                                    <h4 className="font-medium text-sm"> Accessibility</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-aria-expanded:rotate-180 duration-200">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </Link>
                                                <ul className="-space-y-1">
                                                    <li>
                                                        <div className="p-4">
                                                            <p className="text-[13px] font-light"> Alt text helps people with visual impairments understand your photos. You can either write your own alt text or let it be created automatically for your photos. </p>
                                                            <input type="text" placeholder="Write alt text.." className="w-full mt-3" />
                                                        </div>
                                                    </li>
                                                </ul>

                                            </li>

                                            <li className="uk-parent uk-open">
                                                <Link href="/#" className="flex items-center justify-between py-2 px-3.5 group " aria-expanded="true">
                                                    <h4 className="font-medium text-sm"> Advanced settings</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-aria-expanded:rotate-180 duration-200">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </Link>
                                                <ul className="-space-y-2">
                                                    <li>
                                                        <div className="p-4">
                                                            <label className="switch flex justify-between items-start gap-4 cursor-pointer min-h-[30px]">
                                                                <div>
                                                                    <h4 className="font-medium text-sm"> Hide like and view counts on this post</h4>
                                                                </div>
                                                                <input type="checkbox" checked /><span className="switch-button !relative shrink-0"></span>
                                                            </label>
                                                            <div>
                                                                <p className="text-[13px] font-light mt-1.5"> Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people&apos;s posts, go to your
                                                                    account settings. <Link href="/#"> Learn more</Link>.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="p-4">
                                                            <label className="switch flex justify-between items-start gap-4 cursor-pointer min-h-[30px]">
                                                                <div>
                                                                    <h4 className="font-medium text-sm"> Turn off commenting </h4>
                                                                </div>
                                                                <input type="checkbox" checked /><span className="switch-button !relative shrink-0" ></span>
                                                            </label>
                                                            <div>
                                                                <p className="text-[13px] font-light mt-1.5"> You can change this later by going to the menu at the top of your post.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </li>

                                        </ul>

                                    </div>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Profile;