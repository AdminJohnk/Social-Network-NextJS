import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <SideBar /> */}
      <Header />
      <SideBar />
      <div className='h-fit min-h-dvh'>{children}</div>
    </>
  );
}
