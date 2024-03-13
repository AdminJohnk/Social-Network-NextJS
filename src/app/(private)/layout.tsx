import Header from '@/components/shared/Header';
import SideBar from '@/components/shared/SideBar';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='w-full overflow-hidden'>
      <Header />
      <SideBar />
      <div className='h-full'>{children}</div>
    </main>
  );
}
