import { create } from "zustand";

interface SidebarStore {
  open: boolean;
  toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>()((set) => ({
  open: false,
  toggleSidebar: () => set((state) => ({ open: !state.open })),
}));

export default useSidebarStore;
