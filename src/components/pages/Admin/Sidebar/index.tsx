'use client';

import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Link, usePathname, useRouter } from '@/navigation';
import { FaBook, FaSwatchbook, FaUser } from 'react-icons/fa';
import { FaPeopleGroup, FaQuestion } from 'react-icons/fa6';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isUserActive = pathname === '/admin/user';
  const isPostActive = pathname === '/admin/post';
  const isSeriesActive = pathname === '/admin/series';
  const isCommunityActive = pathname === '/admin/community';
  const isQuestionActive = pathname === '/admin/question';

  return (
    <aside className='inset-y fixed left-0 z-20 flex h-full flex-col border-r border-border-1'>
      <Link href='/' className='p-2'>
        <Logo />
      </Link>
      <nav className='grid items-center justify-center gap-1 p-2'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={cn('rounded-lg hover:bg-muted', isUserActive && 'bg-muted')}
              aria-label='Users manager'
              onClick={() => router.push('/admin/user')}>
              <FaUser className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right' sideOffset={5}>
            Users
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={cn('rounded-lg hover:bg-muted', isPostActive && 'bg-muted')}
              aria-label='Posts manager'
              onClick={() => router.push('/admin/post')}>
              <FaBook className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right' sideOffset={5}>
            Posts
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={cn('rounded-lg hover:bg-muted', isSeriesActive && 'bg-muted')}
              aria-label='Series manager'
              onClick={() => router.push('/admin/series')}>
              <FaSwatchbook className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right' sideOffset={5}>
            Series
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={cn('rounded-lg hover:bg-muted', isCommunityActive && 'bg-muted')}
              aria-label='Communities manager'
              onClick={() => router.push('/admin/community')}>
              <FaPeopleGroup className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right' sideOffset={5}>
            Communities
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={cn('rounded-lg hover:bg-muted', isQuestionActive && 'bg-muted')}
              aria-label='Questions manager'
              onClick={() => router.push('/admin/question')}>
              <FaQuestion className='size-5' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right' sideOffset={5}>
            Questions
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
