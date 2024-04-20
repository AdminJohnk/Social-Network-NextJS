'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Modal } from '@mui/material';
import {
  IoClose,
  IoImageOutline,
  IoImageSharp,
  IoNotificationsOffOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoStopCircleOutline,
  IoTrashOutline
} from 'react-icons/io5';
import { FaArrowLeft, FaCrown, FaDownload, FaPlusCircle, FaRegUser, FaUser, FaUserShield } from 'react-icons/fa';

import { useCurrentConversationData, useCurrentUserInfo, useMessagesImage } from '@/hooks/query';
import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';
import { IMessage } from '@/types';
import { getImageURL } from '@/lib/utils';
import { getDateTimeToNow } from '@/lib/descriptions/formatDateTime';
import MembersToGroup from './Modal/MembersToGroup';

export interface IChatInfoProps {
  conversationID: string[] | undefined;
}

export default function ChatInfo({ conversationID }: IChatInfoProps) {
  if (conversationID === undefined) return <></>;

  const t = useTranslations();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { currentConversation, isLoadingCurrentConversation } = useCurrentConversationData(conversationID[0]);

  const { messagesImage, isLoadingMessagesImage } = useMessagesImage(conversationID[0]);

  const [openAvatar, setOpenAvatar] = useState(false);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);


  const [audios, setAudios] = useState<IMessage[]>([]);
  const [files, setFiles] = useState<IMessage[]>([]);
  const [links, setLinks] = useState<IMessage[]>([]);

  useEffect(() => {
    setLinks([]);
    setFiles([]);
    setAudios([]);
  }, []);

  const [enableSeeAll, setEnableSeeAll] = useState(false);
  const seeAllItems = useMemo(() => {
    return {
      images: messagesImage,
      files: files,
      links: links,
      audios: audios
    };
  }, [audios, files, links, messagesImage]);
  const [seeAllType, setSeeAllType] = useState<string>();

  const changeConversationOption = useCallback((type: string) => {
    setEnableSeeAll(!enableSeeAll);
    setSeeAllType(type);
  }, []);

  const otherUser = useMemo(() => {
    return currentConversation?.members?.filter((member) => member._id !== currentUserInfo?._id)[0];
  }, [currentUserInfo, currentConversation?.members]);

  const downloadImage = async (url?: string) => {
    if (!url) return;
    const originalImage = url;
    const image = await fetch(getImageURL(originalImage)!);

    //Split image name
    const nameSplit = originalImage.split('/');
    const duplicateName = nameSplit.pop();
    const name = duplicateName?.substring(0, duplicateName.lastIndexOf('_'));

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = '' + name + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const listItems = useCallback(
    (items: IMessage[], description: string, isLoading: boolean) => {
      const firstFourImagesWithInfo = items
        .map((item) =>
          item.images!.map((imageUrl) => ({
            image: imageUrl,
            sender: item.sender,
            createdAt: item.createdAt
          }))
        )
        .flat()
        .slice(0, 4);
      return (
        <div className='content'>
          {isLoading ? (
            <>Loading...</>
          ) : items.length === 0 ? (<div className='flex flex-col justify-center items-center'>
            <IoImageSharp className='text-3xl text-gray-300' />
            {description}
          </div>
          ) : (
            <>
              {firstFourImagesWithInfo.map((image, index) => (
                <div className='flex justify-between items-center mb-2 ml-2' key={index}>
                  <div className='left flex justify-between items-center'>
                    <div className='image mr-2 flex rounded-xl h-14 w-14 overflow-hidden'>
                      <Image
                        src={getImageURL(image.image, 'post')}
                        alt='image'
                        className='h-full w-full object-cover'
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className='info'>
                      <div className='name font-bold'>
                        {image?.sender.name}
                      </div>
                      <div className='date'>{getDateTimeToNow(image.createdAt!)}</div>
                    </div>
                  </div>
                  <div
                    className='cursor-pointer mr-2'
                    onClick={() => {
                      void downloadImage(image.image);
                    }}>
                    <FaDownload />
                  </div>
                </div>
              ))}
              {items
                .slice(0, 4)
                .map((item) => item.images)
                .flat().length > 4 && (
                  <div className='flex items-end justify-end text-sm mt-2 mr-2 underline'>
                    <p className='cursor-pointer'
                      onClick={() => {
                        changeConversationOption('image');
                      }}>
                      See all
                    </p>
                  </div>
                )}
            </>
          )}
        </div>
      );
    },
    [currentConversation, isLoadingCurrentConversation, messagesImage, isLoadingMessagesImage]
  );

  const listImages = (items: IMessage[]) => {
    return listItems(items, 'No images', isLoadingMessagesImage);
  };

  useEffect(() => {
    console.log(openAddMember)
  }, [openAddMember]);

  const handleOpen = () => setOpenAddMember(true);
  const handleClose = () => setOpenAddMember(false);

  return (
    <>
      {isLoadingCurrentConversation ? (
        <></>
      ) : (
        <div className='right w-full h-full absolute top-0 right-0 z-10 hidden transition-transform'>
          <div className='uk-animation-slide-right-medium w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 z-50 dark:bg-background-2 dark:border-slate-700'>
            <div className='w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px'></div>

            <div className='py-10 flex-center flex-col text-center text-sm pt-20'>
              {currentConversation.type === 'group' ? (
                <AvatarGroup
                  key={currentConversation._id}
                  users={currentConversation.members}
                  image={currentConversation.image}
                  size={96}
                />
              ) : (
                <Link href={`/profile/${otherUser._id}`}>
                  <AvatarMessage key={otherUser._id} user={otherUser} size={96} />
                </Link>
              )}
              {currentConversation.type === 'group' ? (
                <>
                  <div className='mt-8'>
                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                      {currentConversation.name}
                    </div>
                    <div className='text-gray-500 text-sm dark:text-white/80'>
                      {currentConversation.members.length} {t('members')}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='mt-8'>
                    <div className='md:text-xl text-base font-medium text-black dark:text-white'>
                      {otherUser.name}
                    </div>

                    <div className='text-gray-500 text-sm dark:text-white/80'>
                      {otherUser.alias && <>@{otherUser.alias}</>}
                    </div>
                  </div>
                  <div className='mt-5'>
                    <Link
                      href={`/profile/${otherUser._id}`}
                      className='inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-foreground-2'>
                      {t('View profile')}
                    </Link>
                  </div>
                </>
              )}
            </div>

            <hr className='opacity-80 dark:border-slate-700' />
            {enableSeeAll ? (
              <>
                <div className='flex flex-row items-center py-2'>
                  <button
                    className='back-button w-8 h-8 flex justify-center items-center mx-2 rounded-full bg-none hover:bg-hover-1 border-none shadow-none'
                    onClick={() => {
                      setEnableSeeAll(false);
                    }}>
                    <FaArrowLeft className='text-lg' />
                  </button>
                  <span className='font-bold text-lg'>Medias</span>
                </div>
                {messagesImage.map((item) => (
                  item.images?.map((image, index) => (
                    <div className='fileContent flex justify-between items-center mb-2 ml-2' key={index}>
                      <div className='left flex justify-between items-center'>
                        <div className='image mr-2 flex rounded-xl h-14 w-14 overflow-hidden'>
                          <Image
                            src={getImageURL(image, 'post')}
                            alt='image'
                            className='h-full w-full object-cover'
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className='info'>
                          <div className='name font-bold'>
                            {item?.sender.name}
                          </div>
                          <div className='date'>{getDateTimeToNow(item.createdAt!)}</div>
                        </div>
                      </div>
                      <div
                        className='right cursor-pointer mr-2'
                        onClick={() => {
                          void downloadImage(image);
                        }}>
                        <FaDownload />
                      </div>
                    </div>
                  ))
                ))}
              </>
            ) : (
              <ul className='text-base font-medium px-1' data-uk-nav>
                <li>
                  <div className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                    <IoNotificationsOffOutline className='text-2xl' />
                    {t('Mute Notification')}
                    <label className='switch cursor-pointer ml-auto'>
                      <input type='checkbox' defaultChecked />
                      <span className='switch-button !relative'></span>
                    </label>
                  </div>
                </li>
                <li className='uk-parent'>
                  <Link
                    href=''
                    className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                    <IoImageOutline className='text-2xl' /> {t('Images')}
                  </Link>
                  <ul className='pl-5 my-1 space-y-0 text-sm'>
                    {listImages(messagesImage ?? [])}
                  </ul>
                </li>
                {currentConversation.type === 'group' && (
                  <li className='uk-parent'>
                    <Link
                      href={''}
                      className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                      <IoPersonOutline className='text-2xl' /> {t('Members')}
                    </Link>
                    <ul>
                      <div className='ml-1 w-full flex flex-col items-center'>
                        <div className='listUser flex flex-col w-full pl-3' style={{ overflow: 'auto' }}>
                          {currentConversation.members.map((member) => {
                            const isAdmin = currentConversation.admins.some((admin) => admin._id === member._id);
                            const isCreator = currentConversation.creator === member._id;
                            return (
                              <div key={member._id} className='mt-3 w-full flex flex-row justify-between items-center'>
                                <div className='user flex items-center' key={member._id}>
                                  {/* <Tooltip
                                  arrow
                                  title={`Message ${member.name}`}
                                  overlayInnerStyle={{
                                    borderRadius: '0.55rem',
                                    backgroundColor: themeColorSet.colorBgReverse3,
                                    color: themeColorSet.colorTextReverse2,
                                    fontWeight: 500
                                  }}
                                  mouseEnterDelay={0.2}
                                  autoAdjustOverflow>
                                  <div
                                    className='avatar-member relative cursor-pointer'
                                    onClick={() => {
                                      void messageService
                                        .createConversation({
                                          type: 'private',
                                          members: [member._id]
                                        })
                                        .then((res) => {
                                          chatSocket.emit(Socket.NEW_CONVERSATION, res.data.metadata);
                                          mutateReceiveConversation(res.data.metadata);
                                          navigate(`/message/${res.data.metadata._id}`);
                                        });
                                    }}>
                                    <AvatarMessage key={member._id} user={member} />
                                  </div>
                                </Tooltip> */}
                                  <div
                                    className='relative cursor-pointer'>
                                    <AvatarMessage key={member._id} user={member} />
                                  </div>
                                  <div className='flex flex-col text-left ml-2 font-bold'>
                                    <div className='flex flex-row items-center gap-2'>
                                      <span>{member.name}</span>
                                      {isAdmin &&
                                        (isCreator ? (
                                          <FaCrown className='ml-1 text-base' />
                                        ) : (
                                          <FaUserShield className='ml-1' />
                                        ))}
                                    </div>
                                    {isAdmin &&
                                      (isCreator ? (
                                        <p className='text-xs'>Group creator</p>
                                      ) : (
                                        <p className='text-xs'>Administrator</p>
                                      ))}
                                  </div>
                                </div>

                                {/* <Dropdown
                                className='options h-5 w-5 p-1 rounded-full cursor-pointer'
                                menu={{ items: memberOptions(member) }}
                                trigger={['click']}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                              </Dropdown> */}
                              </div>
                            );
                          })}
                        </div>
                        {currentConversation.admins.some((admin) => admin._id === currentUserInfo?._id) && (
                          <div
                            className='add-member mt-3 w-11/12 flex items-center flex-row cursor-pointer pl-3 pr-5 py-2 rounded-full hover:bg-hover-1 select-none'
                            onClick={handleOpen}>
                            <FaPlusCircle className='text-2xl' />
                            <span className='text-sm font-medium text-left ml-2 select-none'>Add members</span>
                            <Modal
                              open={openAddMember}
                              onClose={handleClose}
                              aria-labelledby='modal-modal-title'
                              aria-describedby='modal-modal-description'
                            >
                              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-1 shadow-lg rounded-md outline-none'>
                                <MembersToGroup
                                  users={currentConversation.members}
                                  conversationID={currentConversation._id}
                                  handleClose={handleClose}
                                />
                              </div>
                            </Modal>
                          </div>
                        )}
                      </div>
                    </ul>
                  </li>
                )}
                <li>
                  <button
                    type='button'
                    className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                    <IoSettingsOutline className='text-2xl' /> {t('Ignore messages')}
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                    <IoStopCircleOutline className='text-2xl' /> {t('Block')}
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500'>
                    <IoTrashOutline className='text-2xl' /> {t('Delete Chat')}
                  </button>
                </li>
              </ul>
            )}



            {/* <!-- close button --> */}
            <button
              type='button'
              className='absolute top-0 right-0 m-4 p-2 hover:bg-hover-1 rounded-full'
              data-uk-toggle='target: .right; cls: hidden'>
              <IoClose className='text-2xl flex' />
            </button>
          </div>

          {/* <!-- overlay --> */}
          <div
            className='bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40'
            data-uk-toggle='target: .right;cls: hidden'></div>
        </div>
      )}
    </>
  );
}
