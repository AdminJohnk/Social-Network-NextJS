import { cn } from '@/lib/utils';
import { TypeOfLevel } from '@/types';
import * as React from 'react';

export interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: string[];
  label: string;
  setSelect: (value: TypeOfLevel) => void;
}

export default function Select({
  data,
  label,
  setSelect,
  ...props
}: ISelectProps) {
  return (
    <div className='relative h-10 w-72 min-w-[200px]'>
      <select
        {...props}
        className={cn(
          'peer h-full w-full rounded-[7px] border !border-t-0 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50',
          '*:bg-foreground-1'
        )}
        style={{
          clipPath: 'inset(0px -10px -10px -10px)'
        }}
        onChange={e => setSelect(e.target.value as TypeOfLevel)}
      >
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label
        className={cn(
          "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-text-2 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-blue-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-500"
        )}
      >
        {label}
      </label>
    </div>
  );
}
