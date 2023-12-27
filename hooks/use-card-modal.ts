import { create } from "zustand";

type CardModalStore = {
  isOpen: boolean;
  id?: string;
  open: (id: string) => void;
  close: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  isOpen: false,
  open: (id) => set({ isOpen: true, id }),
  close: () => set({ isOpen: false }),
}));
