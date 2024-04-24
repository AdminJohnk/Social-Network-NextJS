import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'duration-500 inline-flex items-center justify-center rounded-lg text-sm font-medium disabled:pointer-events-none disabled:opacity-50 !outline-none !ring-transparent !border-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700',
        destructive: 'text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
        main: 'text-text-1 bg-foreground-2 hover:bg-hover-2',
        outline:
          'text-primary-700 border border-primary-700 hover:text-white hover:bg-primary-700 dark:text-primary-300 dark:border-primary-300 dark:hover:text-white dark:hover:bg-primary-700',
        secondary:
          'text-white bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-400 dark:hover:bg-secondary-500',
        ghost:
          'text-primary-700 hover:text-white hover:bg-primary-700 dark:text-primary-300 dark:hover:text-white dark:hover:bg-primary-700',
        link: 'text-primary-700 underline hover:text-primary-800 dark:text-primary-300 dark:underline dark:hover:text-primary-400'
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1',
        lg: 'px-5 py-3',
        icon: 'px-2 py-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  preIcon?: React.ReactNode;
  sufIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, preIcon, sufIcon, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {preIcon && <span className='mr-1.5 text-xl max-lg:!mr-0'>{preIcon}</span>}
        {props.children}
        {sufIcon && <span className='ml-1.5 text-xl max-lg:!mr-0'>{sufIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
