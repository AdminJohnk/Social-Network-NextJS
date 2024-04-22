'use client';

import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { CircularProgress } from '@mui/material';
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
import {
  FaArrowLeft,
  FaChevronDown,
  FaCommentDots,
  FaCrown,
  FaDownload,
  FaPlusCircle,
  FaUser,
  FaUserShield,
  FaUserSlash
} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { FaEllipsisVertical, FaRightFromBracket } from 'react-icons/fa6';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { messageService } from '@/services/MessageService';
import { useCurrentConversationData, useCurrentUserInfo, useMessagesImage } from '@/hooks/query';
import AvatarGroup from './Avatar/AvatarGroup';
import AvatarMessage from './Avatar/AvatarMessage';
import { IMessage, IUserInfo } from '@/types';
import { getImageURL } from '@/lib/utils';
import { getDateTimeToNow } from '@/lib/descriptions/formatDateTime';
import MembersToGroup from './Modal/MembersToGroup';
import { useSocketStore } from '@/store/socket';
import { Socket } from '@/lib/utils/constants/SettingSystem';
import { useLeaveGroup, useReceiveConversation, useSendMessage } from '@/hooks/mutation';
import { Button } from '@/components/ui/button';
import { ProfileUpload } from '@/components/ui/upload-image';

export interface IChatInfoProps {
  conversationID: string | undefined;
}

export default function ChatInfo({ conversationID }: IChatInfoProps) {
  if (conversationID === undefined) return <></>;

  const t = useTranslations();

  const { chatSocket } = useSocketStore();
  const { mutateSendMessage } = useSendMessage();
  const { mutateReceiveConversation } = useReceiveConversation();
  const { mutateLeaveGroup } = useLeaveGroup();

  const router = useRouter();

  const { data: session } = useSession();
  const { currentUserInfo } = useCurrentUserInfo(session?.id as string);

  const { currentConversation, isLoadingCurrentConversation } = useCurrentConversationData(conversationID);

  const { messagesImage, isLoadingMessagesImage } = useMessagesImage(conversationID);

  const [openChangeAvatar, setOpenChangeAvatar] = useState(false);
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);

  const [groupName, setGroupName] = useState('');

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
    return currentConversation?.members?.filter((member) => member._id !== currentUserInfo._id)[0];
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
            <div className='flex-center p-1'>
              <CircularProgress size={20} className='!text-text-1' />
            </div>
          ) : items.length === 0 ? (
            <div className='flex flex-col justify-center items-center'>
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
                      <div className='name font-bold'>{image?.sender.name}</div>
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
                    <p
                      className='cursor-pointer'
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

  const friends = useMemo(() => {
    return currentUserInfo.members;
  }, [currentUserInfo.members]);

  // filter members in friends but not in conversation
  const members = useMemo(() => {
    return friends?.filter((friend) => {
      return !currentConversation?.members.some((member) => member._id === friend._id);
    });
  }, [friends, currentConversation?.members]);

  const memberOptions = useCallback(
    (user: IUserInfo) => {
      const isMe = user._id === currentUserInfo._id;
      const isAdmin = currentConversation.admins.some((admin) => admin._id === user._id);

      const isMeCreator = currentConversation?.creator === currentUserInfo._id;
      const isMeAdmin =
        currentConversation?.admins.some((admin) => admin._id === currentUserInfo._id) || isMeCreator;

      return (
        <ul>
          {!isAdmin && isMeCreator && (
            <li>
              <button
                type='button'
                className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
                onClick={() => {
                  void messageService.commissionAdmin(currentConversation._id, user._id).then((res) => {
                    chatSocket.emit(Socket.COMMISSION_ADMIN, res.data.metadata);

                    const message = {
                      _id: uuidv4().replace(/-/g, ''),
                      conversation_id: conversationID,
                      sender: {
                        _id: currentUserInfo._id,
                        user_image: currentUserInfo.user_image,
                        name: currentUserInfo.name
                      },
                      isSending: true,
                      type: 'notification',
                      action: 'promote_admin',
                      target: {
                        _id: user._id,
                        name: user.name
                      },
                      createdAt: new Date()
                    };

                    mutateSendMessage(message as unknown as IMessage);
                    chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
                  });
                }}>
                <FaUserShield className='text-2xl' />
                <span className='whitespace-nowrap'>{t('Commission as administrator')}</span>
              </button>
            </li>
          )}
          {isMeCreator && isAdmin && !isMe && (
            <li>
              <button
                type='button'
                className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
                onClick={() => {
                  void messageService.removeAdmin(currentConversation._id, user._id).then((res) => {
                    chatSocket.emit(Socket.DECOMMISSION_ADMIN, res.data.metadata);

                    const message = {
                      _id: uuidv4().replace(/-/g, ''),
                      conversation_id: conversationID,
                      sender: {
                        _id: currentUserInfo._id,
                        user_image: currentUserInfo.user_image,
                        name: currentUserInfo.name
                      },
                      isSending: true,
                      type: 'notification',
                      action: 'revoke_admin',
                      target: {
                        _id: user._id,
                        name: user.name
                      },
                      createdAt: new Date()
                    };

                    mutateSendMessage(message as unknown as IMessage);
                    chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
                  });
                }}>
                <FaUserSlash className='text-2xl' />
                <span className='whitespace-nowrap'>{t('Revoke administrator')}</span>
              </button>
            </li>
          )}
          {!isMe && (
            <li>
              <button
                type='button'
                className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
                onClick={() => {
                  void messageService
                    .createConversation({
                      type: 'private',
                      members: [user._id]
                    })
                    .then((res) => {
                      chatSocket.emit(Socket.NEW_CONVERSATION, res.data.metadata);
                      mutateReceiveConversation(res.data.metadata);
                      router.push(`/messages/${res.data.metadata._id}`);
                    });
                }}>
                <FaCommentDots className='text-2xl' />{' '}
                <span className='whitespace-nowrap'>{t('Message')}</span>
              </button>
            </li>
          )}
          <li>
            <button
              type='button'
              className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
              onClick={() => {
                router.push(`/profile/${user._id}`);
              }}>
              <FaUser className='text-2xl' /> <span className='whitespace-nowrap'>{t('View profile')}</span>
            </button>
          </li>
          {!((isAdmin && !isMe && !isMeCreator) || (!isMeAdmin && !isMe)) && (
            <li>
              <button
                type='button'
                className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
                onClick={() => {
                  if (user._id === currentUserInfo._id) {
                    mutateLeaveGroup(conversationID);
                    const message = {
                      _id: uuidv4().replace(/-/g, ''),
                      conversation_id: conversationID,
                      sender: {
                        _id: currentUserInfo._id,
                        user_image: currentUserInfo.user_image,
                        name: currentUserInfo.name
                      },
                      isSending: true,
                      type: 'notification',
                      action: 'leave_conversation',
                      createdAt: new Date()
                    };

                    mutateSendMessage(message as unknown as IMessage);
                    chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
                  } else {
                    void messageService.removeMember(currentConversation._id, user._id).then((res) => {
                      chatSocket.emit(Socket.REMOVE_MEMBER, {
                        ...res.data.metadata,
                        remove_userID: user._id
                      });

                      const message = {
                        _id: uuidv4().replace(/-/g, ''),
                        conversation_id: conversationID,
                        sender: {
                          _id: currentUserInfo._id,
                          user_image: currentUserInfo.user_image,
                          name: currentUserInfo.name
                        },
                        isSending: true,
                        type: 'notification',
                        action: 'remove_member',
                        target: {
                          _id: user._id,
                          name: user.name
                        },
                        createdAt: new Date()
                      };

                      mutateSendMessage(message as unknown as IMessage);
                      chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });
                    });
                  }
                }}>
                {isMe ? (
                  <FaRightFromBracket className='text-2xl' />
                ) : (
                  isMeAdmin && <FaUserSlash className='text-2xl' />
                )}
                <span className='whitespace-nowrap'>
                  {isMe ? t('Leave group') : isMeAdmin && t('Remove member')}
                </span>
              </button>
            </li>
          )}
        </ul>
      );
    },
    [currentConversation?.admins, currentConversation?.creator, currentUserInfo, members, conversationID]
  );

  const listMembers = useCallback(() => {
    return (
      <div className='ml-1 mb-2 w-full flex flex-col items-center'>
        <div className='listUser flex flex-col w-full pl-3' style={{ overflow: 'auto' }}>
          {currentConversation?.members.map((member) => {
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
                  <Link href={`/profile/${member._id}`} className='relative'>
                    <AvatarMessage key={member._id} user={member} />
                  </Link>
                  <Link href={`/profile/${member._id}`} className='flex flex-col text-left ml-2 font-bold'>
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
                        <p className='text-xs'>{t('Group creator')}</p>
                      ) : (
                        <p className='text-xs'>{t('Administrator')}</p>
                      ))}
                  </Link>
                </div>

                <div>
                  <button className='flex items-center gap-5 rounded-full p-3 w-full hover:bg-hover-1'>
                    <FaEllipsisVertical />
                  </button>
                  <div
                    className='min-w-[260px] !w-fit'
                    data-uk-dropdown='pos: bottom-left; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10'>
                    {memberOptions(member)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {currentConversation.admins.some((admin) => admin._id === currentUserInfo._id) && (
          <Dialog open={openAddMember} onOpenChange={setOpenAddMember}>
            <DialogTrigger className='add-member mt-3 w-full flex items-center flex-row cursor-pointer pl-3 pr-5 py-2 rounded-xl hover:bg-hover-1 select-none'>
              <FaPlusCircle className='text-2xl' />
              <span className='text-sm font-medium text-left ml-2 select-none'>{t('Add members')}</span>
            </DialogTrigger>
            <DialogContent className='bg-background-1 max-w-[600px] border-none'>
              <DialogHeader>
                <DialogTitle>{t('Add members')}</DialogTitle>
              </DialogHeader>
              <MembersToGroup
                users={members}
                conversationID={currentConversation._id}
                handleClose={() => setOpenAddMember(false)}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    );
  }, [
    currentConversation?.admins,
    currentConversation?.members,
    currentUserInfo,
    members,
    openAddMember,
    memberOptions
  ]);

  // change conversation name
  const [isLoadingChangeName, setIsLoadingChangeName] = useState(false);
  const isChangedName = useMemo(() => {
    return groupName === currentConversation?.name;
  }, [groupName, currentConversation]);

  const onSubmitChangeName = useCallback(() => {
    setIsLoadingChangeName(true);

    messageService
      .changeConversationName(conversationID, groupName!)
      .then((res) => {
        setIsLoadingChangeName(false);
        const message = {
          _id: uuidv4().replace(/-/g, ''),
          conversation_id: conversationID,
          sender: {
            _id: currentUserInfo._id,
            user_image: currentUserInfo.user_image,
            name: currentUserInfo.name
          },
          isSending: true,
          type: 'notification',
          action: 'change_name',
          content: groupName,
          createdAt: new Date()
        };

        mutateSendMessage(message as unknown as IMessage);
        chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });

        chatSocket.emit(Socket.CHANGE_CONVERSATION_NAME, res.data.metadata);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoadingChangeName(false);
        setOpenChangeName(false);
      });
  }, [groupName]);

  // change conversation image
  const [avatar, setAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState<File>();

  const [isLoadingChangeAvatar, setIsLoadingChangeAvatar] = useState(false);
  const isChangedAvatar = useMemo(() => {
    return !fileAvatar;
  }, [fileAvatar]);

  useEffect(() => {
    if (currentConversation?.image) {
      setAvatar(getImageURL(currentConversation.image, 'avatar'));
    }
  }, [currentConversation]);

  const onSubmitChangeAvatar = useCallback(() => {
    setIsLoadingChangeAvatar(true);

    messageService
      .changeConversationImage(conversationID, fileAvatar!)
      .then((res) => {
        setIsLoadingChangeAvatar(false);
        const message = {
          _id: uuidv4().replace(/-/g, ''),
          conversation_id: conversationID,
          sender: {
            _id: currentUserInfo._id,
            user_image: currentUserInfo.user_image,
            name: currentUserInfo.name
          },
          isSending: true,
          type: 'notification',
          action: 'change_avatar',
          createdAt: new Date()
        };

        mutateSendMessage(message as unknown as IMessage);
        chatSocket.emit(Socket.PRIVATE_MSG, { conversationID, message });

        chatSocket.emit(Socket.CHANGE_CONVERSATION_IMAGE, res.data.metadata);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoadingChangeAvatar(false);
        setOpenChangeAvatar(false);
      });
  }, [fileAvatar]);

  return (
    <div className='right w-full h-full absolute top-0 right-0 z-[9999] hidden transition-transform'>
      <div className='uk-animation-slide-right-medium w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 z-[9999] dark:bg-background-2 dark:border-slate-700 custom-scrollbar-bg overflow-y-scroll'>
        {isLoadingCurrentConversation ? (
          <div className='flex-center p-1'>
            <CircularProgress size={20} className='!text-text-1' />
          </div>
        ) : (
          <>
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
                {messagesImage.map((item) =>
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
                          <div className='name font-bold'>{item?.sender.name}</div>
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
                )}
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
                {currentConversation.type === 'group' && (
                  <li className='uk-parent'>
                    <Link
                      href=''
                      className='flex items-center justify-between gap-5 rounded-md p-3 w-full hover:bg-hover-1 group'>
                      <div className='flex flex-row gap-5'>
                        <IoSettingsOutline className='text-2xl' /> {t('Customize conversation')}
                      </div>
                      <FaChevronDown className='mr-2 duration-300 group-aria-expanded:rotate-180' />
                    </Link>
                    <ul className='pl-5 my-1 space-y-0 text-sm'>
                      <li>
                        {/* <button
                          type='button'
                          className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                          <IoImageOutline className='text-2xl' /> {t('Change group image')}
                        </button> */}
                        <Dialog open={openChangeAvatar} onOpenChange={setOpenChangeAvatar}>
                          <DialogTrigger className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1 select-none'>
                            <IoImageOutline className='text-2xl' />
                            <span className='select-none'>{t('Change group image')}</span>
                          </DialogTrigger>
                          <DialogContent className='bg-background-1 max-w-[600px] border-none'>
                            <DialogHeader>
                              <DialogTitle>{t('Change group image')}</DialogTitle>
                            </DialogHeader>
                            <ProfileUpload fieldChange={setFileAvatar} mediaURL={avatar} />
                            <DialogFooter>
                              <Button
                                variant={'destructive'}
                                className='button lg:px-6 text-white max-md:flex-1'
                                onClick={() => setOpenChangeAvatar(false)}>
                                {t('Cancel')}
                              </Button>
                              <Button
                                className='button lg:px-6 text-white max-md:flex-1'
                                onClick={onSubmitChangeAvatar}
                                disabled={isChangedAvatar || isLoadingChangeAvatar}>
                                {isLoadingChangeAvatar && (
                                  <CircularProgress size={20} className='!text-text-1 mr-2' />
                                )}
                                {t('Save')}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </li>
                      <li>
                        {/* <button
                        type='button'
                        className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'
                        onClick={() => setOpenChangeName(true)}
                      >
                        <IoPersonOutline className='text-2xl' /> {t('Change group name')}
                      </button> */}
                        <Dialog open={openChangeName} onOpenChange={setOpenChangeName}>
                          <DialogTrigger className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1 select-none'>
                            <IoPersonOutline className='text-2xl' />
                            <span className='select-none'>{t('Change group name')}</span>
                          </DialogTrigger>
                          <DialogContent className='bg-background-1 max-w-[600px] border-none'>
                            <DialogHeader>
                              <DialogTitle>{t('Change group name')}</DialogTitle>
                            </DialogHeader>
                            <input
                              type='text'
                              defaultValue={currentConversation.name}
                              placeholder={t("Group's name")}
                              className='w-full !py-2 rounded-lg bg-foreground-1'
                              onChange={(event) => setGroupName(event.currentTarget.value)}
                            />
                            <DialogFooter>
                              <Button
                                variant={'destructive'}
                                className='button lg:px-6 text-white max-md:flex-1'
                                onClick={() => setOpenChangeName(false)}>
                                {t('Cancel')}
                              </Button>
                              <Button
                                className='button lg:px-6 text-white max-md:flex-1'
                                onClick={onSubmitChangeName}
                                disabled={isChangedName || isLoadingChangeName}>
                                {isLoadingChangeName && (
                                  <CircularProgress size={20} className='!text-text-1 mr-2' />
                                )}
                                {t('Save')}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </li>
                      {/* <li>
                      <button
                        type='button'
                        className='flex items-center gap-5 rounded-md p-3 w-full hover:bg-hover-1'>
                        <IoPersonOutline className='text-2xl' /> {t('Change emoticons')}
                      </button>
                    </li> */}
                    </ul>
                  </li>
                )}
                <li className='uk-parent'>
                  <Link
                    href=''
                    className='flex items-center justify-between gap-5 rounded-md p-3 w-full hover:bg-hover-1 group'>
                    <div className='flex flex-row gap-5'>
                      <IoImageOutline className='text-2xl' /> {t('Images')}
                    </div>
                    <FaChevronDown className='mr-2 duration-300 group-aria-expanded:rotate-180' />
                  </Link>
                  <ul className='pl-5 my-1 space-y-0 text-sm'>{listImages(messagesImage || [])}</ul>
                </li>
                {currentConversation.type === 'group' && (
                  <li className='uk-parent'>
                    <Link
                      href=''
                      className='flex items-center justify-between gap-5 rounded-md p-3 w-full hover:bg-hover-1 group'>
                      <div className='flex flex-row gap-5'>
                        <IoPersonOutline className='text-2xl' /> {t('Members')}
                      </div>
                      <FaChevronDown className='mr-2 duration-300 group-aria-expanded:rotate-180' />
                    </Link>
                    <ul>{listMembers()}</ul>
                  </li>
                )}
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

            {/* <!-- overlay --> */}
          </>
        )}
      </div>
      <div
        className='bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40'
        data-uk-toggle='target: .right;cls: hidden'></div>
    </div>
  );
}
