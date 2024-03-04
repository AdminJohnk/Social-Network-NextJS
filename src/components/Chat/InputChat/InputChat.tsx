import { Dropdown } from 'flowbite-react';
import * as React from 'react';
import { IoAddCircleOutline, IoDocumentText, IoHappyOutline, IoHeart, IoHeartOutline, IoSendOutline } from 'react-icons/io5';
import { FaGift, FaImage } from 'react-icons/fa';

export interface IInputChatProps {
}

export default function InputChat(props: IInputChatProps) {
    return (
        <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden">

            <div id="message__wrap" className="flex items-center gap-2 h-full dark:text-white -mt-1.5">
                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <button type="button" className="shrink-0">
                    <IoAddCircleOutline className="text-3xl flex"></IoAddCircleOutline>
                </button>}>
                    <div className="sm:w-full p-3 flex justify-center gap-5">
                        <Dropdown.Item>
                            <button type="button" className="bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                <FaImage className="text-3xl flex"></FaImage>
                            </button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <button type="button" className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                <FaImage className="text-3xl flex"></FaImage>

                            </button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <button type="button" className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                <IoDocumentText className="text-3xl flex"></IoDocumentText>
                            </button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <button type="button" className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                <FaGift className="text-3xl flex"></FaGift>
                            </button>
                        </Dropdown.Item>
                    </div>
                </Dropdown>
                <button type="button" className="shrink-0">
                    <IoHappyOutline className="text-3xl flex"></IoHappyOutline>
                </button>
            </div>

            <div className="relative flex-1">
                <textarea placeholder="Write your message" rows={1} className="w-full resize-none bg-hover-1 rounded-full px-4 p-2"></textarea>

                <button type="button" className="text-white shrink-0 p-2 absolute right-0.5 top-0.5">
                    <IoSendOutline className="text-3xl flex"></IoSendOutline>
                </button>
            </div>

            <button type="button" className="flex h-full dark:text-white">
                <IoHeartOutline className="text-3xl flex -mt-3" />
            </button>

        </div>
    );
}
