import { cn } from '@/lib/utils';

export interface IInputStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputStyle({ className, ...props }: IInputStyleProps) {
  return (
    <input
      {...props}
      className={cn(
        'border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all placeholder:opacity-0 focus:border-violet-500 focus:outline-0 focus:placeholder:opacity-100 disabled:border-0 text-text-1',
        className
      )}
      placeholder=''
    />
  );
}
