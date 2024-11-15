// pages/lecturer/layout.tsx
import DashboardLayout from '@/components/layout/dashboard-layout';
import { NavItemType } from '@/components/layout/nav-item-type';
import { FilePlus, Home } from 'lucide-react';
// import LecturerS from '@/components/sidebar/LecturerSidebar';

const menuList: NavItemType[] = [
  {
    tooltip: 'Home',
    href: '/student/dashboard',
    icon: Home,
  },
  {
    tooltip: 'Setujui IRS',
    href: '/student/add-irs',
    icon: FilePlus,
  },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout menuList={menuList}>{children}</DashboardLayout>;
}
