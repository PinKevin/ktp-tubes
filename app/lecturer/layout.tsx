// pages/lecturer/layout.tsx
import DashboardLayout from '@/components/layout/dashboard-layout';
import { NavItemType } from '@/components/layout/nav-item-type';
import { Check, Home } from 'lucide-react';
// import LecturerS from '@/components/sidebar/LecturerSidebar';

const menuList: NavItemType[] = [
  {
    tooltip: 'Home',
    href: '/lecturer/dashboard',
    icon: Home,
  },
  {
    tooltip: 'Setujui IRS',
    href: '/lecturer/verify-irs',
    icon: Check,
  },
];

export default function LecturerLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout menuList={menuList}>{children}</DashboardLayout>;
}
