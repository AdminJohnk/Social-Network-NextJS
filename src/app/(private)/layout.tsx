import SideBar from '@/components/SideBar/Sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full overflow-hidden sm:flex'>
      <SideBar />
      <section className='flex h-[calc(100%-160px)] flex-1 overflow-auto md:h-full'>{children}</section>
    </div>
  );
}
