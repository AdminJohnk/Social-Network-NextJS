import LogoHeader from './Logo';
import SearchHeader from './Search';
import CreateHeader from './Create';
import NotificationsHeader from './Notifications';
import MessagesHeader from './Messages';
import ProfileHeader from './Profile';
import Language from './Language';

export default function Header() {
  return (
    <header className='fixed left-0 top-0 z-50 flex h-[--m-top] w-full items-center border-b border-border-1 bg-background-1 backdrop-blur-xl'>
      <div className='flex w-full items-center px-2 max-lg:gap-10 xl:px-6'>
        <LogoHeader />
        <div className='relative flex-1'>
          <div className='mx-auto flex max-w-[1220px] items-center'>
            <SearchHeader />
            <div className='absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-2 text-text-1 sm:gap-4'>
              <CreateHeader />
              <MessagesHeader />
              <NotificationsHeader />
              <Language />
              <ProfileHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
