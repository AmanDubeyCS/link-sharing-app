// store.ts
import { create } from "zustand"

interface LinkData {
  id: string
  link: string
  platform: string
}

interface StoreState {
  links: LinkData[]
  setLinks: (links: LinkData[]) => void
}

export const useStore = create<StoreState>((set) => ({
  links: [],
  setLinks: (links) => set({ links }),
}))
