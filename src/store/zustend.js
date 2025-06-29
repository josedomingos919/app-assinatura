import { create } from "zustand";

export const useApp = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
