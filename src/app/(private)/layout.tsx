import SideBar from '@/components/SideBar/Sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full overflow-hidden sm:flex'>
      <SideBar />
      <section className='flex flex-1 justify-center overflow-auto h-full'>{children}</section>
    </div>
  );
}
