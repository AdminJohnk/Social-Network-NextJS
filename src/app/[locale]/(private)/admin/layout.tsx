import AdminSidebar from '@/components/pages/Admin/Sidebar';

interface IAdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: IAdminLayoutProps) {
  return (
    <div className='grid h-dvh w-full pl-[56px]'>
      <AdminSidebar />
      {children}
    </div>
  );
}
