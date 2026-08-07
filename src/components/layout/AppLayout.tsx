import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';

export default function AppLayout() {
  return (
    <div className="flex h-full min-h-screen bg-background text-on-background">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <TopHeader />
        <MobileHeader />
        <main className="mx-auto w-full max-w-[1280px] flex-1 space-y-6 p-4 pb-24 md:space-y-8 md:p-10 md:pb-10">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
