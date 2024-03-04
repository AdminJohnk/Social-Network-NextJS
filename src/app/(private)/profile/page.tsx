/* eslint-disable @next/next/no-img-element */
"use client";

import {
    IoCameraOutline,
    IoPlayOutline,
    IoPricetagsOutline,
    IoHappy,
    IoTimeOutline,
    IoNotificationsOffOutline,
    IoHeartOutline,
    IoHeartCircle,
    IoAddCircle,
    IoChatbubbleEllipsesOutline,
    IoChatbubbleEllipses,
    IoStopCircleOutline,
    IoShareOutline,
    IoFlagOutline,
    IoEllipsisHorizontal,
    IoBookmarkOutline,
    IoChevronForwardOutline,
    IoChevronBack,
    IoCamera,
    IoChevronForward,
} from "react-icons/io5";
import { FaImage, FaHeart } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
    return (
        <div>
            <div id="wrapper">
                {/* <!-- main contents --> */}
                {/* <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]"> */}
                <main>
                    <div className="main__inner">

                        {/* <!-- profile  --> */}
                        <div className="py-6 relative">

                            <div className="flex md:gap-16 gap-4 max-md:flex-col">
                                <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                                    <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
                                        <img src="assets/images/avatars/avatar-6.jpg" alt="" className="w-full h-full absolute object-cover" />
                                    </div>
                                    <button type="button" className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"> <IoCamera className="text-2xl" /></button>
                                </div>
                                <div className="max-w-2x flex-1">
                                    <h3 className="md:text-xl text-base font-semibold text-black dark:text-white"> Monroe Parker </h3>

                                    <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">@Monroepak</p>

                                    <p className="text-sm mt-2 md:font-normal font-light"> I love beauty and emotion. 🥰 I’m passionate about photography and learning. 📚 I explore genres and styles. 🌈 I think photography is storytelling. 📖 I hope you like and feel my photos. 😊</p>

                                    <p className="mt-2 space-x-2 text-gray-500 text-sm hidden" style={{ marginTop: "11px" }}><Link href="#" className="inline-block">Travel</Link> . <Link href="#" className="inline-block">Business</Link> . <Link href="#" className="inline-block">Technolgy</Link>  </p>

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
                                            <button type="button" className="button bg-pink-100 text-pink-600 border border-pink-200">Unfallow</button>
                                            <button type="submit" className="button bg-pink-600 text-white">Message</button>
                                            <div>
                                                <button type="submit" className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-background-2"> <IoEllipsisHorizontal className="text-xl" /></button>
                                                <div className="w-[240px] !bg-background-2" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10">
                                                    <nav>
                                                        <Link href="#" className="hover:!bg-hover-1"> <IoPricetagsOutline className=" text-xl" /> Unfollow </Link>
                                                        <Link href="#" className="hover:!bg-hover-1"> <IoTimeOutline className=" text-xl" />  Mute story </Link>
                                                        <Link href="#" className="hover:!bg-hover-1"> <IoFlagOutline className=" text-xl" />  Report </Link>
                                                        <Link href="#" className="hover:!bg-hover-1"> <IoShareOutline className=" text-xl" /> Share profile </Link>
                                                        <hr />
                                                        <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl" />  Block </Link>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="mt-10">

                            {/* <!-- sticky tabs --> */}

                            <div data-uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">

                                <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                                    <ul className="flex gap-2 justify-center border-t dark:border-slate-700" data-uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium">

                                        <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <IoCameraOutline className="mr-2 text-2xl" /> Posts  </Link> </li>
                                        <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <IoPlayOutline className="mr-2 text-2xl" /> Reels </Link> </li>
                                        <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <IoPricetagsOutline className="mr-2 text-2xl" /> Tagged </Link> </li>
                                    </ul>
                                </nav>

                            </div>

                            <div id="story_tab" className="uk-switcher">


                                {/* <!-- Post list --> */}
                                <div>

                                    {/* <!-- hightlets slider post --> */}

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

                                        <div className="relative mt-5" tabIndex={-1} data-uk-slider="autoplay: true;finite: true">

                                            <div className="overflow-hidden uk-slider-container py-10">

                                                <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]" data-uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50" uk-lightbox="">
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 max-lg:hidden" data-uk-scrollspy-className="uk-animation-fade">
                                                        <div className="flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600">
                                                            <IoAddCircle className="text-4xl text-teal-900" />
                                                            <div className="mt-1 font-semibold">Add New</div>
                                                        </div>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="assets/images/avatars/avatar-lg-1.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-1.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="assets/images/avatars/avatar-lg-2.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-2.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="assets/images/avatars/avatar-lg-3.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-3.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="assets/images/avatars/avatar-lg-4.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-4.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <Link href="assets/images/avatars/avatar-lg-5.jpg" data-caption="Caption">
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

                                            <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" data-uk-slider-item="previous"> <IoChevronBack className="text-2xl" /> </button>
                                            <button type="button" className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" data-uk-slider-item="next"> <IoChevronForward className="text-2xl" /> </button>

                                        </div>

                                    </div>


                                    {/* <!-- post list  --> */}

                                    <div className="mt-8">

                                        {/* <!-- post heading --> */}
                                        <div className="flex items-center justify-between py-3">
                                            <h1 className="text-xl font-bold text-black dark:text-white">Posts</h1>

                                            <Link href="#" className="text-sm font-semibold flex items-center gap-2">
                                                Show acheived <IoChevronForwardOutline />
                                            </Link>
                                        </div>

                                        {/* <!-- Post list --> */}
                                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6" data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-2.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-5.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-1.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-3.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-2.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                            <img src="assets/images/post/post-4.jpg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                                                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                                <div className="flex items-center gap-2"> <IoHeartCircle className="text-2xl" /> 152</div>
                                                                <div className="flex items-center gap-2"> <IoChatbubbleEllipses className="text-2xl" /> 290</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            {/* <!-- placeholders --> */}
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>

                                        </div>


                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-background-2">Load more...</button>
                                    </div>

                                </div>



                                {/* <!-- Reels  list --> */}
                                <div className="pt-16">


                                    <div className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2" data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" />  14
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 32
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 46
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" />16
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-5.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 38
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 33
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 62
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 42
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 18
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <Link href="#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IoPlayOutline className="text-2xl" /> 29
                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>

                                        </div>


                                        {/* <!-- placeholders --> */}
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>

                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-background-2">Load more...</button>
                                    </div>


                                </div>





                                {/* <!-- short list --> */}
                                <div className="pt-16">


                                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4" data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">


                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> John Michael </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> Alexa stella </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-5.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>

                                        <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-background-2">

                                            {/* <!-- heading --> */}
                                            <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                                <Link href="profile.html" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </Link>
                                                <div className="flex-1">
                                                    <Link href="profile.html"><h4 className="text-black dark:text-white"> John Michael </h4></Link>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IoEllipsisHorizontal className="text-xl" /> </button>
                                                    <div className="w-[232px]" data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <Link href="#"> <IoBookmarkOutline className="text-xl shrink-0" /> Add favorites </Link>
                                                            <Link href="#"> <IoFlagOutline className="text-xl shrink-0" />  Report </Link>
                                                            <Link href="#"> <IoShareOutline className="text-xl shrink-0" />  Share </Link>
                                                            <hr />
                                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <IoStopCircleOutline className="text-xl shrink-0" /> Remove </Link>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <Link href="#preview_modal" data-uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </Link>

                                            {/* <!-- post icons --> */}
                                            <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                                <button type="button" className="button__ico"> <IoHeartOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico"> <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg" /> </button>
                                                <button type="button" className="button__ico ml-auto"> <IoBookmarkOutline className="md:text-2xl text-lg" /> </button>
                                            </div>

                                        </div>


                                        {/* <!-- placeholders --> */}
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>
                                        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-background-2 animate-pulse"></div>

                                    </div>

                                    {/* <!-- load more --> */}
                                    <div className="flex justify-center my-6">
                                        <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-background-2">Load more...</button>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                </main>

            </div >

            {/* <!-- post preview modal --> */}
            <div className="hidden max-lg:!items-start lg:p-20"
                id="preview_modal"
                data-uk-modal="">
                <div className="uk-modal-dialog tt ax-w-[86rem] relative mx-auto w-full items-center overflow-hidden rounded-lg shadow-xl lg:flex lg:h-[80vh]">
                    {/* <!-- image previewer --> */}
                    <div className="relative flex h-96 w-full items-center justify-center lg:h-full lg:w-[calc(100vw-400px)]">
                        <div className="relative z-10 h-full w-full">
                            <img
                                src="assets/images/post/post-1.jpg"
                                alt=""
                                className="absolute h-full w-full object-cover"
                            />
                        </div>

                        {/* <!-- close button --> */}
                        <button
                            type="button"
                            className="uk-animation-slide-right-medium uk-modal-close absolute right-0 top-0 z-10 m-3 rounded-full bg-white p-2 dark:bg-slate-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- right sidebar --> */}
                    <div className="dark:bg-background-2 relative flex h-full w-full  flex-col justify-between overflow-y-auto bg-white shadow-xl lg:w-[400px]">
                        <div className="p-5 pb-0">
                            {/* <!-- story heading --> */}
                            <div className="flex gap-3 text-sm font-medium">
                                <img
                                    src="assets/images/avatars/avatar-5.jpg"
                                    alt=""
                                    className="h-9 w-9 rounded-full"
                                />
                                <div className="flex-1">
                                    <h4 className="font-medium text-black dark:text-white">

                                        Steeve
                                    </h4>
                                    <div className="text-xs text-gray-500 dark:text-white/80">

                                        2 hours ago
                                    </div>
                                </div>

                                {/* <!-- dropdown --> */}
                                <div className="-m-1">
                                    <button type="button" className="button__ico h-8 w-8">

                                        <IoEllipsisHorizontal className="text-xl" />
                                    </button>
                                    <div
                                        className="w-[253px]"
                                        data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true"
                                    >
                                        <nav>
                                            <Link href="/#">
                                                <IoBookmarkOutline className="shrink-0 text-xl" /> Add
                                                to favorites
                                            </Link>
                                            <Link href="/#">
                                                <IoNotificationsOffOutline className="shrink-0 text-xl" />
                                                Mute Notification
                                            </Link>
                                            <Link href="/#">
                                                <IoFlagOutline className="shrink-0 text-xl" /> Report
                                                this post
                                            </Link>
                                            <Link href="/#">
                                                <IoShareOutline className="shrink-0 text-xl" /> Share
                                                your profile
                                            </Link>
                                            <hr />
                                            <Link
                                                href="/#"
                                                className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                                            >
                                                <IoStopCircleOutline className="shrink-0 text-xl" />
                                                Unfollow
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-sm font-normal leading-6">

                                Photography is the art of capturing light with a camera. it can
                                be fun, challenging. It can also be a hobby, a passion. 📷
                            </p>

                            <div className="relative -mx-5 mt-3 px-5 py-3 shadow">
                                <div className="flex items-center gap-4 text-xs font-semibold">
                                    <div className="flex items-center gap-2.5">
                                        <button
                                            type="button"
                                            className="button__ico bg-red-100 text-red-500 dark:bg-slate-700"
                                        >
                                            <FaHeart className="text-lg" />
                                        </button>
                                        <Link href="/#">1,300</Link>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            className="button__ico bg-slate-100 dark:bg-slate-700"
                                        >
                                            <IoChatbubbleEllipses className="text-lg" />
                                        </button>
                                        <span>260</span>
                                    </div>
                                    <button type="button" className="button__ico ml-auto">

                                        <IoShareOutline className="text-xl" />
                                    </button>
                                    <button type="button" className="button__ico">

                                        <IoBookmarkOutline className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="h-full flex-1 overflow-y-auto p-5">
                            {/* <!-- comment list --> */}
                            <div className="relative space-y-5 text-sm font-medium">
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-2.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Steeve
                                        </Link>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-3.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Monroe
                                        </Link>
                                        <p className="mt-0.5"> You captured the moment.😎 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-7.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Alexia
                                        </Link>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-4.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            John
                                        </Link>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-5.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Michael
                                        </Link>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-3.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Monroe
                                        </Link>
                                        <p className="mt-0.5"> Awesome. 😊😢 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-5.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Jesse
                                        </Link>
                                        <p className="mt-0.5"> Well done 🎨📸 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-2.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Steeve
                                        </Link>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-7.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Alexia
                                        </Link>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-4.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            John
                                        </Link>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-5.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Michael
                                        </Link>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-3">
                                    <img
                                        src="assets/images/avatars/avatar-3.jpg"
                                        alt=""
                                        className="mt-1 h-6 w-6 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <Link
                                            href="/#"
                                            className="inline-block font-medium text-black dark:text-white"
                                        >

                                            Monroe
                                        </Link>
                                        <p className="mt-0.5"> Awesome. 😊😢 </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-white p-3 text-sm font-medium">
                            <img
                                src="assets/images/avatars/avatar-2.jpg"
                                alt=""
                                className="h-6 w-6 rounded-full"
                            />

                            <div className="relative flex-1 overflow-hidden ">
                                <textarea
                                    placeholder="Add Comment...."
                                    rows={1}
                                    className="resize- w-full  resize-y px-4 py-2 focus:!border-transparent focus:!ring-transparent"
                                ></textarea>

                                <div className="absolute bottom-0.5 right-0 m-3 flex items-center gap-2">
                                    <FaImage className="flex text-xl text-blue-700" />
                                    <IoHappy className="flex text-xl text-yellow-500" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-hover-1 hidden rounded-full px-4 py-1.5 text-sm font-semibold"
                            >

                                Replay
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Profile;
