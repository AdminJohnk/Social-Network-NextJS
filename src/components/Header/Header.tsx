import LogoHeader from './Logo';
import SearchHeader from './Search';
import CreateHeader from './Create';
import NotificationsHeader from './Notifications';
import MessagesHeader from './Messages';
import ProfileHeader from './Profile';

export default function Header() {
  return (
    <header className='z-[100] h-[--m-top] fixed top-0 left-0 w-full flex items-center bg-background-1 backdrop-blur-xl border-b border-border-1'>
      <div className='flex items-center w-full xl:px-6 px-2 max-lg:gap-10'>
        <LogoHeader />
        <div className='flex-1 relative'>
          <div className='max-w-[1220px] mx-auto flex items-center'>
            <SearchHeader />
            <div className='flex items-center sm:gap-4 gap-2 absolute right-5 top-1/2 -translate-y-1/2 text-black'>
              <CreateHeader />
              <NotificationsHeader />
              <MessagesHeader />
              <ProfileHeader />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
