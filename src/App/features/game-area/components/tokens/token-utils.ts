import LizardToken from "./LizardToken";
import PaperToken from "./PaperToken";
import RockToken from "./RockToken";
import ScissorsToken from "./ScissorsToken";
import SpockToken from "./SpockToken";

import { TokenType, WinnerType } from "../../types";

const tokens = [
  { type: TokenType.ROCK, component: RockToken },
  { type: TokenType.PAPER, component: PaperToken },
  { type: TokenType.SCISSORS, component: ScissorsToken },
  { type: TokenType.LIZARD, component: LizardToken },
  { type: TokenType.SPOCK, component: SpockToken },
];

const winningCombinations: Record<TokenType, TokenType[]> = {
  [TokenType.ROCK]: [TokenType.SCISSORS, TokenType.LIZARD],
  [TokenType.PAPER]: [TokenType.ROCK, TokenType.SPOCK],
  [TokenType.SCISSORS]: [TokenType.PAPER, TokenType.LIZARD],
  [TokenType.LIZARD]: [TokenType.SPOCK, TokenType.PAPER],
  [TokenType.SPOCK]: [TokenType.SCISSORS, TokenType.ROCK],
};

const getWinnerMessage = (winner: WinnerType): string => {
  switch (winner) {
    case WinnerType.PLAYER:
      return "You Won! 🎉";
    case WinnerType.COMPUTER:
      return "Computer Won! 🤖";
    case WinnerType.TIE:
      return "It's a Tie! 🤝";
    default:
      return "";
  }
};

const getWinner = (
  playerMove: TokenType,
  computerMove: TokenType
): WinnerType => {
  if (playerMove === computerMove) return WinnerType.TIE;

  return winningCombinations[playerMove].includes(computerMove)
    ? WinnerType.PLAYER
    : WinnerType.COMPUTER;
};

const getRandomToken = (): TokenType => {
  const types = Object.values(TokenType);
  return types[Math.floor(Math.random() * types.length)];
};

export { tokens, getWinner, getRandomToken, getWinnerMessage };
