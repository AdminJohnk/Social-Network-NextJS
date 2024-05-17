import { cn } from '@/lib/utils';
import { TextareaAutosize } from '@mui/material';
import { useState } from 'react';

export interface ITextareaV2Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextareaV2({
  className,
  label,
  maxLength,
  placeholder,
  onChange,
  ...props
}: ITextareaV2Props) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='relative w-full min-w-[200px]'>
      <TextareaAutosize
        {...props}
        maxLength={maxLength}
        className={cn(
          'peer w-full resize-none border-gray-200 focus:border-violet-500 border-0 border-b bg-transparent pt-4 pb-1.5 px-0 font-sans text-[1rem] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 !ring-transparent !shadow-none !outline-none custom-scrollbar-bg',
          className
        )}
        maxRows={3}
        placeholder={placeholder}
        onChange={(e) => {
          setCount(e.target.value.length);
          onChange && onChange(e);
        }}
      />
      <label
        className={cn(
          "after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[13px] font-normal leading-tight text-text-2 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[13px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent"
        )}>
        <div className='flex gap-2'>
          {label}
          {maxLength && (
            <span>
              ({count}/{maxLength})
            </span>
          )}
        </div>
      </label>
    </div>
  );
}
// bấm ra
// focus
