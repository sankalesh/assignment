import { create } from 'zustand'

// zustand is a library which provides us create function which create store that we can access from anywhere

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))