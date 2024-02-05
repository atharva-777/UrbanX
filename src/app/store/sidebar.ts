import { create } from "zustand";

interface SidebarStore {
  open: boolean;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>()((set) => ({
  open: true,
  toggleSidebar: () => set((state) => ({ open: !open })),
}));

export default useSidebarStore;
