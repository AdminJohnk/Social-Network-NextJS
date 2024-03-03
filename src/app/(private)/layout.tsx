import SideBar from '@/components/SideBar/Sidebar';

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <div className='ms-60 px-40 py-10'>{children}</div>
    </>
  );
}
