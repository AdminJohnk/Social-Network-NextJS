import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type option = 'post' | 'avatar' | 'avatar_mini' | 'default' | 'post_mini';

const imageOptions: Record<string, string> = {
  post: '?tr=w-800,h-600',
  avatar: '?tr=w-200,h-200',
  avatar_mini: '?tr=w-100,h-100',
  post_mini: '?tr=w-400,h-300'
};

const ImageURL = (src: string, option: option) => {
  if (src.includes('http')) return src;

  const query = imageOptions[option] ?? '';
  return `https://ik.imagekit.io/admintck/${src}${query}`;
};

export const getImageURL = (src?: string | null, option: option = 'default') => {
  if (!src) return;
  return ImageURL(src, option);
};

import { IPost, IUserInfo } from '@/types';

const ApplyDefaults = <T extends IUserInfo | IPost | IPost[]>(obj: T): T => {
  const defaultValues: IUserInfo | IPost = {
    _id: '',
    id_incr: 0,
    email: '',
    phone_number: '',
    user_image: '',
    cover_image: '',
    tags: [],
    alias: '',
    about: '',
    posts: [],
    experiences: [],
    repositories: [],
    contacts: [],
    location: '',
    createdAt: '',
    members: [],
    favorites: [],
    communities: [],
    notifications: [],
    friends: [],
    requestSent: [],
    requestReceived: [],
    is_friend: false,
    role: [],
    name: '',
    friend_number: 0,
    pendingFriend_number: 0,
    post_number: 0,
    type: 'Post',
    visibility: 'public',
    post_attributes: {
      user: {
        _id: '',
        id_incr: 0,
        email: '',
        role: [],
        phone_number: '',
        user_image: '',
        cover_image: '',
        last_online: '',
        members: [],
        tags: [],
        alias: '',
        about: '',
        posts: [],
        experiences: [],
        repositories: [],
        contacts: [],
        location: '',
        createdAt: '',
        favorites: [],
        communities: [],
        notifications: [],
        friends: [],
        requestSent: [],
        requestReceived: [],
        is_friend: false,
        name: '',
        friend_number: 0,
        pendingFriend_number: 0,
        post_number: 0
      },
      title: '',
      content: '',
      images: [],
      url: undefined,
      post: undefined,
      owner_post: undefined,
      likes: [],
      comments: [],
      shares: [],
      view_number: 0,
      like_number: 0,
      comment_number: 0,
      share_number: 0
    },
    is_liked: false,
    is_shared: false,
    is_saved: false
  };

  if (!obj) return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => ({ ...defaultValues, ...item })) as T;
  }

  return { ...defaultValues, ...obj } as T;
};

export default ApplyDefaults;
