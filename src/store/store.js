import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useHistoryStore = create(
  persist(
    (set, get) => ({
      history: [],
      addToHistory: (url) => {
        const currHistory = get().history
        console.log(currHistory)

        if (currHistory.length === 7) {
          currHistory.pop()
        }

        const newHistory = [url, ...currHistory]

        set(() => ({ history: newHistory }))
      },
    }),
    {
      name: 'history',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
