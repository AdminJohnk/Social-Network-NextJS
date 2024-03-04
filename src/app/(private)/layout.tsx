import SideBar from '@/components/SideBar/Sidebar';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
