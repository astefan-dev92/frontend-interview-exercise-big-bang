import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TokenType } from "./features/game-area/types";

export interface GameState {
  player: string | null;
  setPlayer: (player: string) => void;
  playerMove: TokenType | null;
  computerMove: TokenType | null;
  setPlayerMove: (move: TokenType) => void;
  setComputerMove: (move: TokenType) => void;
  resetMoves: () => void;
  wins: number;
  losses: number;
  roundEnded: boolean;
  setRoundEnded: (roundEnded: boolean) => void;
  incrementWins: () => void;
  incrementLosses: () => void;
  resetScore: () => void;
}

const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      player: null,
      setPlayer: (player: string) => set({ player }),
      playerMove: null,
      computerMove: null,
      setPlayerMove: (move: TokenType) => set({ playerMove: move }),
      setComputerMove: (move: TokenType) => set({ computerMove: move }),
      resetMoves: () => set({ playerMove: null, computerMove: null }),
      wins: 0,
      losses: 0,
      roundEnded: false,
      setRoundEnded: (roundEnded: boolean) => set({ roundEnded }),
      incrementWins: () => set((state) => ({ wins: state.wins + 1 })),
      incrementLosses: () => set((state) => ({ losses: state.losses + 1 })),
      resetScore: () => set({ wins: 0, losses: 0 }),
    }),
    {
      name: "rpsls-state-storage",
    }
  )
);

export default useGameStore;
