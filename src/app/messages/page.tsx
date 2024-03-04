/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { IoCheckmarkCircleOutline, IoCheckmarkOutline, IoChevronBackOutline, IoChevronDownOutline, IoNotificationsOffOutline, IoSettingsOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

import ConversationList from '@/components/Chat/ConversationList';
import InputChat from '@/components/Chat/InputChat';
import ChatInfo from '@/components/Chat/ChatInfo';


const Message = () => {
    const [show, setShow] = useState(false);
    const handleOpenChatInfo = () => {
        setShow(!show);
    }
    useEffect(() => {

    }), [show];
    return (
        <>
            <div id="wrapper">
                {/* <!-- main contents --> */}
                {/* <main className="2xl:ml-[290px] xl:ml-[240px] md:ml-[73px]"> */}
                <main>

                    <div className="2xl:max-w-6xl mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">

                        <div className="flex bg-background-1 dark:bg-background-2">

                            {/* <!-- sidebar --> */}
                            <div className="md:w-[360px] relative border-r dark:border-slate-700">

                                <div id="side-chat" className="top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen bg-white z-50 max-md:shadow max-md:-translate-x-full dark:bg-background-2">

                                    {/* <!-- heading title --> */}
                                    <div className="p-4 border-b dark:border-slate-700">

                                        <div className="flex mt-2 items-center justify-between">

                                            <h2 className="text-2xl font-bold text-black ml-1 dark:text-white"> Chats </h2>

                                            {/* <!-- right action buttons --> */}
                                            <div className="flex items-center gap-2.5">
                                                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <button className="group">
                                                    <IoSettingsOutline className="text-2xl flex group-aria-expanded:rotate-180" />
                                                </button>}>
                                                    <div className="md:w-[270px] w-full">
                                                        <Dropdown.Item>
                                                            <Link href="/#" className='flex items-center gap-1'> <IoCheckmarkOutline className=" text-xl" /> Notifications setting </Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Link href="/#" className='flex items-center gap-1'> <IoNotificationsOffOutline className=" text-xl" /> Mute notifications </Link>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <Link href="/#" className='flex items-center gap-1'> <IoVolumeMuteOutline className=" text-xl" /> Report </Link>
                                                        </Dropdown.Item>
                                                    </div>
                                                </Dropdown>

                                                <button className="">
                                                    <IoCheckmarkCircleOutline className="text-2xl flex" />
                                                </button>

                                                {/* <!-- mobile toggle menu --> */}
                                                <button type="button" className="md:hidden" uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full">
                                                    <IoChevronDownOutline />
                                                </button>

                                            </div>

                                        </div>

                                        {/* <!-- search --> */}
                                        <div className="relative mt-4">
                                            <div className="absolute left-3 bottom-1/2 translate-y-1/2 flex">
                                                <FaSearch className="text-xl" />
                                            </div>
                                            <input type="text" placeholder="Search" className="w-full !pl-10 !py-2 !rounded-lg bg-hover-1" />
                                        </div>

                                    </div>


                                    {/* <!-- users list --> */}
                                    <ConversationList />

                                </div>

                                {/* <!-- overly --> */}
                                <div id="side-chat" className="bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden"></div>

                            </div>

                            {/* <!-- message center -->/ */}
                            <div className="flex-1">

                                {/* <!-- chat heading --> */}
                                <div className="flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium">

                                    <div className="flex items-center sm:gap-4 gap-2">

                                        {/* <!-- toggle for mobile --> */}
                                        <button type="button" className="md:hidden" uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full">
                                            <IoChevronBackOutline className='text-2xl -ml-4' />
                                        </button>

                                        <div className="relative cursor-pointer max-md:hidden" uk-toggle="target: .right ; cls: hidden">
                                            <img src="assets/images/avatars/avatar-6.jpg" alt="" className="w-8 h-8 rounded-full shadow" />
                                            <div className="w-3 h-3 bg-teal-500 rounded-full absolute -right-0.5 -bottom-0.5 m-px"></div>
                                        </div>
                                        <div className="cursor-pointer" uk-toggle="target: .right ; cls: hidden">
                                            <div className="text-base font-bold"> Monroe Parker</div>
                                            <div className="text-xs text-green-500 font-semibold"> Online</div>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button type="button" className="hover:bg-hover-1 p-1.5 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <button type="button" className="hover:bg-hover-1 p-1.5 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                            </svg>
                                        </button>
                                        <button type="button" className="hover:bg-hover-1 p-1.5 rounded-full" onClick={() => { handleOpenChatInfo() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>

                                {/* <!-- chats bubble --> */}
                                <div className="w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)] custom-scrollbar-fg">

                                    <div className="py-10 text-center text-sm lg:pt-8">
                                        <img src="assets/images/avatars/avatar-6.jpg" className="w-24 h-24 rounded-full mx-auto mb-3" alt="" />
                                        <div className="mt-8">
                                            <div className="md:text-xl text-base font-medium text-black dark:text-white"> Monroe Parker </div>
                                            <div className="text-gray-500 text-sm   dark:text-white/80"> @Monroepark </div>
                                        </div>
                                        <div className="mt-3.5">
                                            <Link href="/profile" className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-hover-1">View profile</Link>
                                        </div>
                                    </div>

                                    <div className="text-sm font-medium space-y-6">

                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> Hi, I’m John </div>
                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-5 h-5 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> I’m Lisa. welcome John</div>
                                        </div>

                                        {/* <!-- time --> */}
                                        <div className="flex justify-center ">
                                            <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                                                April 8,2023,6:30 AM
                                            </div>
                                        </div>

                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> I’m selling a photo of a sunset. It’s a print on canvas, signed by the photographer. Do you like it? 😊 </div>
                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-4 h-4 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> Wow, it’s beautiful. How much ? 😍 </div>
                                        </div>

                                        {/* <!-- sent media--> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-4 h-4 rounded-full shadow" />

                                            <Link className="block rounded-[18px] border overflow-hidden" href="/#">
                                                <div className="max-w-md">
                                                    <div className="max-w-full relative w-72">
                                                        <div className="relative" style={{ paddingBottom: "57.4286%" }}>
                                                            <div className="w-full h-full absolute inset-0">
                                                                <img src="assets/images/product/product-2.jpg" alt="" className="block max-w-full max-h-52 w-full h-full object-cover" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>

                                        {/* <!-- time --> */}
                                        <div className="flex justify-center ">
                                            <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                                                April 8,2023,6:30 AM
                                            </div>
                                        </div>


                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> I’m glad you like it. I’m asking for $200 🤑</div>
                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-5 h-5 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> $200? Too steep. Can you lower the price a bit? 😕</div>
                                        </div>

                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> Well, I can’t go too low because I paid a lot. But I’m willing to negotiate. What’s your offer? 🤔 </div>

                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-5 h-5 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> Sorry, can’t pay more than $150. 😅</div>
                                        </div>

                                        {/* <!-- time --> */}
                                        <div className="flex justify-center ">
                                            <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                                                April 8,2023,6:30 AM
                                            </div>
                                        </div>

                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> $150? Too low. Photo worth more. 😬</div>
                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-5 h-5 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> Too high. I Can’t . How about $160? Final offer. 😬 </div>
                                        </div>

                                        {/* <!-- received --> */}
                                        <div className="flex gap-3">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-9 h-9 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-hover-1"> Fine, fine. You’re hard to please. I’ll take $160, but only because I like you. 😍</div>
                                        </div>

                                        {/* <!-- sent --> */}
                                        <div className="flex gap-2 flex-row-reverse items-end">
                                            <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-5 h-5 rounded-full shadow" />
                                            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow"> Great, thank you. I appreciate it. I love this photo and can’t wait to hang it. 😩 </div>
                                        </div>

                                    </div>

                                </div>

                                {/* <!-- sending message area --> */}
                                <InputChat />

                            </div>

                            {/* <!-- user profile right info --> */}
                            <ChatInfo isShowInfo={show} />

                        </div>

                    </div>


                </main>

            </div>


        </>
    );
}

export default Message;