import FloatTool from '@/components/shared/FloatTool/FloatTool';
import Header from '@/components/shared/Header';
import SideBar from '@/components/shared/SideBar';
import ToTop from '@/components/shared/ToTop';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full overflow-hidden'>
      <Header />
      <SideBar />
      <div className='h-full'>
        <FloatTool />
        {children}
        <ToTop />
      </div>
    </main>
  );
}
