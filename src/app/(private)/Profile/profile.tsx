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


const Profile = () => {
    return (
        <>
            <div id="wrapper">

                {/* <!-- sidebar --> */}
                <div id="sidebar" className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0">

                    <div id="sidebar__inner" className="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">

                        {/* <!-- logo --> */}
                        <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
                            <a href="/" id="logo" className="flex items-center gap-3">

                                {/* <!-- logo icon --> */}
                                <img id="logo__icon" src="assets/images/logo-icon.png" alt="" className="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up" />

                                {/* <!-- text logo --> */}
                                <img id="logo__text" src="assets/images/logo.svg" alt="" className="w-full h-6 ml-1 max-xl:hidden max-md:block dark:!hidden" />
                                <img id="logo__text" src="assets/images/logo-dark.svg" alt="" className="w-full h-6 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block" />

                            </a>
                        </div>

                        {/* <!-- nav --> */}
                        <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">

                            {/* <!-- Home --> */}
                            <a href="/">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                                </svg>
                                <span className="max-xl:hidden"> Home </span>
                            </a>

                            {/* <!-- Search --> */}
                            <a href="/#!">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <span className="max-xl:hidden"> Search </span>
                            </a>
                            <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium; mode:click; offset: 9">
                                <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                                    {/* <!-- header --> */}
                                    <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                                        <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Search</h3>

                                        <div className="relative -mx-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                            <input type="text" placeholder="Search" className="bg-transparen w-full !pl-10 !py-2 !rounded-lg" />
                                        </div>

                                    </div>

                                    {/* <!-- contents list --> */}
                                    <div className="p-2 space-y-2 dark:text-white">

                                        <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                                            <h4>Recent</h4>
                                            <button type="button" className="text-blue-500 text-sm">Clear all</button>
                                        </div>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                            </div>
                                        </a>
                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-5.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                            </div>
                                            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                            </svg>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">   artificial intelligence  </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 13,352K post </div>
                                            </div>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">  Monroe Parker </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Parker . following </div>
                                            </div>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-7.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                            </div>
                                        </a>
                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-4.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                            </div>
                                            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                            </svg>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">  Ui Designers </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 9,362K post </div>
                                            </div>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                            </svg>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white"> Affiliate marketing  </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 4,248K post </div>
                                            </div>
                                        </a>

                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                            </div>
                                        </a>
                                        <a href="/profile" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <img src="assets/images/avatars/avatar-5.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                                <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                            </div>
                                            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
                                        </a>


                                    </div>

                                </div>
                            </div>

                            {/* <!-- Explore --> */}
                            <a href="/explore" className="max-md:!hidden">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clip-rule="evenodd" />
                                </svg>
                                <span className="max-xl:hidden"> Explore </span>
                            </a>

                            <a href="/messages" className="max-md:!fixed max-md:top-2 max-md:right-2">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd"></path>
                                </svg>
                                <span className="max-xl:hidden"> Messages </span>
                            </a>

                            {/* <!-- reels --> */}
                            <a href="/reels">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="max-xl:hidden"> reels </span>
                            </a>

                            {/* <!-- Notification --> */}
                            <a href="/#!" className="max-md:!fixed max-md:top-2 max-md:right-14 relative">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                <span className="max-xl:hidden"> Notifications </span>
                                <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                            </a>
                            <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium ; mode:click">
                                <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                                    {/* <!-- header --> */}
                                    <div className="flex items-center justify-between px-5 py-4 mt-3">
                                        <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Notification</h3>

                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* <!-- contents list --> */}
                                    <div className="px-2 -mt-2 text-sm font-normal">

                                        <div className="px-5 py-3 -mx-2">
                                            <h4 className="font-semibold">New</h4>
                                        </div>

                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-2.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> John Michael</b> who you might know, is on Instello.</p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 2 hours ago </div>
                                            </div>
                                            <button type="button" className="button text-white bg-primary">follow</button>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-3.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Alexia Gray</b> started following you. Welcome him to your profile. 👋 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                                <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                            </div>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-7.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1">Jesse Steeve</b> mentioned you in a story. Check it out and reply. 📣 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                        </a>


                                        <div className="border-t px-5 py-3 -mx-2 mt-4 dark:border-slate-700/40">
                                            <h4 className="font-semibold">This Week</h4>
                                        </div>


                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-4.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Jesse Steeve</b> sarah tagged you <br /> in a photo of your birthday party. 📸 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-3.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Sarah Gray</b> sent you a message. He wants to chat with you. 💖 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                                <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                            </div>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-4.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> James Lewis</b> Start following you on instello </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                            <button type="button" className="button bg-primary-soft text-primary">following</button>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-6.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Alexia stella</b> commented on your photo “Wow, stunning shot!” 💬 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-2.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> John Michael</b> mentioned you in a story. Check it out and reply. 📣 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-5.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Jesse Steeve</b> who you might know, is on Instello. </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                            <button type="button" className="button text-white bg-primary">follow</button>
                                        </a>
                                        <a href="/#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                            <div className="relative w-12 h-12 shrink-0"> <img src="assets/images/avatars/avatar-7.jpg" alt="" className="object-cover w-full h-full rounded-full" /></div>
                                            <div className="flex-1 ">
                                                <p> <b className="font-bold mr-1"> Martin Gray</b> liked your photo of the Eiffel Tower. 😍 </p>
                                                <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>


                            {/* <!-- marketplace --> */}
                            <a href="/shop">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                                </svg>
                                <span className="max-xl:hidden"> Shop </span>
                            </a>

                            {/* <!-- people --> */}
                            <a href="/people" className="max-md:!hidden">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                </svg>
                                <span className="max-xl:hidden"> People </span>
                            </a>

                            {/* <!-- create a post --> */}
                            <a href="/!#">
                                <button uk-toggle="target: #create-post" className="flex items-center gap-3 w-full">
                                    <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="max-xl:hidden"> Create </span></button>
                            </a>

                            {/* <!-- components --> */}
                            <a href="/components" className="max-md:!hidden">
                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                                </svg>
                                <span className="max-xl:hidden"> components </span>
                            </a>

                            <a href="/profile" className="max-md:!hidden active">

                                <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                                <span className="max-xl:hidden"> Profile </span>
                            </a>

                        </nav>

                        {/* <!-- profile --> */}
                        <div>
                            <a id="profile-link" className="flex items-center gap-3 p-3 group">
                                <img src="assets/images/avatars/avatar-7.jpg" alt="" className="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0" />
                                <span className="font-semibold text-sm max-xl:hidden">  Monroe Parker </span>
                                <IonIcon icon={chevronForwardOutline} className="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"></IonIcon>
                            </a>
                            <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">

                                <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

                                <div className="p-4 text-xs font-medium">
                                    <a href="/profile">
                                        <img src="assets/images/avatars/avatar-3.jpg" className="w-8 h-8 rounded-full" alt="" />
                                        <div className="mt-2 space-y-0.5">
                                            <div className="text-base font-semibold"> Monroe Parker </div>
                                            <div className="text-gray-400 dark:text-white/80"> @monroe </div>
                                        </div>
                                    </a>
                                    <div className="mt-3 flex gap-3.5">
                                        <div> <a href="/profile"> <strong> 620K </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Following </span> </a> </div>
                                        <div> <a href="/profile"> <strong> 38k </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Followers </span> </a> </div>
                                    </div>

                                </div>
                                <hr className="opacity-60" />
                                <ul className="text-sm font-semibold p-2">
                                    <li>
                                        <a href="/setting" className="flex gap-3 rounded-md p-2 hover:bg-secondery">
                                            <IonIcon icon={personOutline} className="text-lg"></IonIcon> Profile </a>
                                    </li>
                                    <li>
                                        <a href="/upgrade" className="flex gap-3 rounded-md p-2 hover:bg-secondery">
                                            <IonIcon icon={bookmarkOutline} className="text-lg"></IonIcon> Upgrade </a>
                                    </li>
                                    <li>
                                        <a href="/setting" className="flex gap-3 rounded-md p-2 hover:bg-secondery">
                                            <IonIcon icon={settingsOutline} className="text-lg"></IonIcon> Account Setting </a>
                                    </li>
                                    <li>
                                        <a href="/form-login" className="flex gap-3 rounded-md p-2 hover:bg-secondery">
                                            <IonIcon icon={logOutOutline} className="text-lg"></IonIcon> Log Out</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

                {/* <!-- main contents --> */}
                <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">

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

                                    <p className="mt-2 space-x-2 text-gray-500 text-sm hidden" style={{ marginTop: '11px' }}><a href="/#" className="inline-block">Travel</a> . <a href="/#" className="inline-block">Business</a> . <a href="/#" className="inline-block">Technology</a> </p>

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
                                            <div>
                                                <button type="submit" className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon></button>
                                                <div className="w-[240px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10">
                                                    <nav>
                                                        <a href="/#">
                                                            <IonIcon className="text-xl" icon={pricetagsOutline}></IonIcon> Unfollow </a>
                                                        <a href="/#">
                                                            <IonIcon className="text-xl" icon={timeOutline} ></IonIcon> Mute story </a>
                                                        <a href="/#">
                                                            <IonIcon className="text-xl" icon={flagOutline} ></IonIcon> Report </a>
                                                        <a href="/#">
                                                            <IonIcon className="text-xl" icon={shareOutline}></IonIcon> Share profile </a>
                                                        <hr />
                                                        <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                            <IonIcon className="text-xl" icon={stopCircleOutline}></IonIcon> Block </a>
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

                            <div uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">

                                <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                                    <ul className="flex gap-2 justify-center border-t dark:border-slate-700" uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium">

                                        <li>
                                            <a href="/#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white">
                                                <IonIcon className="mr-2 text-2xl" icon={cameraOutline}></IonIcon> Posts </a>
                                        </li>
                                        <li>
                                            <a href="/#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white">
                                                <IonIcon className="mr-2 text-2xl" icon={playOutline}></IonIcon> Reels </a>
                                        </li>
                                        <li>
                                            <a href="/#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white">
                                                <IonIcon className="mr-2 text-2xl" icon={pricetagsOutline}></IonIcon> Tagged </a>
                                        </li>
                                    </ul>
                                </nav>

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
                                                        <a href="/assets/images/avatars/avatar-lg-1.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-1.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <a href="/assets/images/avatars/avatar-lg-2.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-2.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <a href="/assets/images/avatars/avatar-lg-3.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-3.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <a href="/assets/images/avatars/avatar-lg-4.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-4.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                                        <a href="/assets/images/avatars/avatar-lg-5.jpg" data-caption="Caption">
                                                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                                <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                                                                    <img src="assets/images/avatars/avatar-lg-5.jpg" className="rounded-lg w-full h-full object-cover inset-0" alt="" />
                                                                </div>
                                                            </div>
                                                        </a>
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

                                            <a href="/#" className="text-sm font-semibold flex items-center gap-2">
                                                Show achieved  <IonIcon icon={chevronForwardOutline}></IonIcon>
                                            </a>
                                        </div>

                                        {/* <!-- Post list --> */}
                                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

                                            <a href="/#preview_modal" uk-toggle="">
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
                                            </a>

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

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 14
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 32
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 46
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon>16
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 24
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-5.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 38
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 33
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-1.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 62
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-2.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 42
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-3.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 18
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

                                        </div>

                                        {/* <!-- single reels --> */}
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">

                                            <a href="/#">
                                                <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">

                                                    <img className="object-cover w-full h-full" src="assets/images/reels/reels-4.jpg" alt="" />

                                                    <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                        <div className="flex items-center gap-2.5 text-white p-3">
                                                            <IonIcon className="text-2xl" icon={playOutline}></IonIcon> 29
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>

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
                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Monroe Parker </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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
                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Jesse Steeve </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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

                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Martin Gray </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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

                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> John Michael </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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

                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Alexia stella </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-5.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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
                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Monroe Parker </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-1.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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
                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Jesse Steeve </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-2.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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

                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> Martin Gray </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-3.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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

                                                <a href="/profile" className="max-md:hidden">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full" />
                                                </a>
                                                <div className="flex-1">
                                                    <a href="/profile">
                                                        <h4 className="text-black dark:text-white"> John Michael </h4>
                                                    </a>
                                                </div>

                                                {/* <!-- dropdown options --> */}
                                                <div className="absolute top-0.5 right-0 m-2.5">
                                                    <button type="button" className="button__ico w-8 h-8"> <IonIcon className="text-xl" icon={ellipsisHorizontal}></IonIcon> </button>
                                                    <div className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                        <nav>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline}></IonIcon> Add favorites </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report </a>
                                                            <a href="/#">
                                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share </a>
                                                            <hr />
                                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Remove </a>
                                                        </nav>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* <!-- post image --> */}
                                            <a href="/#preview_modal" uk-toggle="">
                                                <div className="relative w-full h-48">
                                                    <img src="assets/images/post/post-4.jpg" alt="" className="w-full h-full object-cover inset-0" />
                                                </div>
                                            </a>

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
                                            <a href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={bookmarkOutline} ></IonIcon> Add to favorites </a>
                                            <a href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={notificationsOffOutline}></IonIcon> Mute Notification </a>
                                            <a href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={flagOutline}></IonIcon> Report this post </a>
                                            <a href="/#">
                                                <IonIcon className="text-xl shrink-0" icon={shareOutline}></IonIcon> Share your profile </a>
                                            <hr />
                                            <a href="/#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50">
                                                <IonIcon className="text-xl shrink-0" icon={stopCircleOutline}></IonIcon> Unfollow </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <p className="font-normal text-sm leading-6 mt-4"> Photography is the art of capturing light with a camera. it can be fun, challenging. It can also be a hobby, a passion. 📷 </p>

                            <div className="shadow relative -mx-5 px-5 py-3 mt-3">
                                <div className="flex items-center gap-4 text-xs font-semibold">
                                    <div className="flex items-center gap-2.5">
                                        <button type="button" className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"> <IonIcon className="text-lg" icon={heart}></IonIcon> </button>
                                        <a href="/#">1,300</a>
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
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Steeve </a>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </a>
                                        <p className="mt-0.5"> You captured the moment.😎 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Alexia </a>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> John  </a>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Michael </a>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </a>
                                        <p className="mt-0.5"> Awesome. 😊😢 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Jesse </a>
                                        <p className="mt-0.5"> Well done 🎨📸 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Steeve </a>
                                        <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Alexia </a>
                                        <p className="mt-0.5"> This photo is amazing! </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> John  </a>
                                        <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Michael </a>
                                        <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 relative">
                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-6 h-6 mt-1 rounded-full" />
                                    <div className="flex-1">
                                        <a href="/#" className="text-black font-medium inline-block dark:text-white"> Monroe </a>
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
                            <div className="w-full h-72 relative border1 rounded-lg overflow-hidden bg-[url('../images/ad_pattern.png')] bg-repeat">

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
                        <li><a href="/#">...</a></li>

                        {/* <!-- tab 2 --> */}
                        <li><a href="/#">...</a></li>

                        {/* <!-- tab 3 --> */}
                        <li><a href="/#">...</a></li>

                    </ul>

                    {/* <!-- card header --> */}
                    <ul className="uk-switcher posTabs p-3.5 border-b text-center text-sm font-semibold text-black dark:text-white dark:border-slate-700">

                        {/* <!-- tab 1 --> */}
                        <li>
                            <div> Upload Photo</div>
                            <a href="/#" className="absolute top-0 m-3 right-1 text-blue-600" uk-switcher-item="next"> Next</a>
                        </li>

                        {/* <!-- tab 2 --> */}
                        <li>
                            <a href="/#" className="absolute top-0 m-3.5 left-0" uk-switcher-item="previous">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            </a>
                            <div> Filter Your Photo </div>
                            <a href="/#" className="absolute top-0 m-3.5 right-1 text-blue-600" uk-switcher-item="next"> Next</a>
                        </li>

                        {/* <!-- tab 3 --> */}
                        <li>
                            <a href="/#" className="absolute top-0 m-3.5 left-0" uk-switcher-item="previous">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                            </a>
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
                                                <li className="flex-1"> <a href="/#" className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10">Filters</a></li>
                                                <li className="flex-1"> <a href="/#" className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10">Adjustments</a></li>
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
                                                <a href="/#" className="flex items-center justify-between py-2 px-3.5 group " aria-expanded="true">
                                                    <h4 className="font-medium text-sm"> Accessibility</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-aria-expanded:rotate-180 duration-200">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </a>
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
                                                <a href="/#" className="flex items-center justify-between py-2 px-3.5 group " aria-expanded="true">
                                                    <h4 className="font-medium text-sm"> Advanced settings</h4>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-aria-expanded:rotate-180 duration-200">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </a>
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
                                                                <p className="text-[13px] font-light mt-1.5"> Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people's posts, go to your
                                                                    account settings. <a href="/#"> Learn more</a>.</p>
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