import { create } from 'zustand';

export type Language = 'EN' | 'FR';

interface AppState {
  language: Language;
  isSidebarOpen: boolean;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'EN',
  isSidebarOpen: false,
  setLanguage: (language) => set({ language }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));
