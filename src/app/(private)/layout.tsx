import SideBar from '@/components/SideBar/Sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      <div className='h-fit min-h-dvh'>{children}</div>
    </>
  );
}
