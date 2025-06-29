import { create } from "zustand";

export const useApp = create((set) => ({
  user: null,
  verifyProps: null,
  setUser: (user) => set({ user }),
  setVerifyProps: (verifyProps) => set({ verifyProps }),
}));
