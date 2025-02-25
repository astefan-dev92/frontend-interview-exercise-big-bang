import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface GameState {
  player: string | null;
  setPlayer: (player: string) => void;
}

const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      player: null,
      setPlayer: (player: string) => set({ player }),
    }),
    {
      name: "rpsls-state-storage",
    }
  )
);

export default useGameStore;
