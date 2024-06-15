import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface IInputStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputStyle = forwardRef<HTMLInputElement, IInputStyleProps>(
  ({ label, maxLength, className, onChange, ...props }, ref) => {
    const [count, setCount] = useState<number>(0);

    return (
      <div className='relative'>
        <input
          ref={ref}
          {...props}
          maxLength={maxLength}
          className={cn(
            'text-blue-gray-700 disabled:bg-blue-gray-50 peer h-full w-full border-b border-gray-200 bg-transparent pb-1.5 pt-4 font-sans text-[1rem] font-normal text-text-1 outline-0 transition-all placeholder:opacity-0 focus:border-violet-500 focus:outline-0 focus:placeholder:opacity-100 disabled:border-0',
            className
          )}
          placeholder=''
          onChange={(e) => {
            setCount(e.target.value.length);
            onChange && onChange(e);
          }}
        />
        <label
          className={cn(
            "after:content[''] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-normal leading-tight text-text-2 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[13px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-x-red-700 peer-disabled:text-transparent",
            className
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
);

InputStyle.displayName = 'InputStyle';

export default InputStyle;
