import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpenText,
  Settings,
  HelpCircle,
  Home,
  MessageSquare,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const primaryNavItems: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Courses', path: '/courses', icon: GraduationCap },
  { label: 'Community', path: '/community', icon: Users },
  { label: 'Study Tools', path: '/study-tools', icon: BookOpenText },
];

export const secondaryNavItems: NavItem[] = [
  { label: 'Settings', path: '/settings', icon: Settings },
  { label: 'Help Center', path: '/help', icon: HelpCircle },
];

export const bottomNavItems: NavItem[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Courses', path: '/courses', icon: GraduationCap },
  { label: 'Groups', path: '/community', icon: MessageSquare },
  { label: 'Profile', path: '/settings', icon: UserRound },
];
