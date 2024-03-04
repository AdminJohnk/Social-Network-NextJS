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

const getImageURL = (src?: string, option: option = 'default') => {
  if (!src) return;
  return ImageURL(src, option);
};

export default getImageURL;
