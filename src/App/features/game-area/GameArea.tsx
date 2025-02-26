import { useCallback, useEffect, useState } from "react";

import { Box, Fade, Button, keyframes } from "@mui/material";

import { tokens } from "./components/tokens";

import useGameStore from "../../store";

import { TokenType, WinnerType, TokenColor } from "./types";
import { TokenGrid } from "./components/token-grid";

const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;

const sx = {
  playAgainContainer: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    position: "relative",
  },
};

const rules = {
  rock: [TokenType.SCISSORS, TokenType.LIZARD],
  paper: [TokenType.ROCK, TokenType.SPOCK],
  scissors: [TokenType.PAPER, TokenType.LIZARD],
  lizard: [TokenType.PAPER, TokenType.SPOCK],
  spock: [TokenType.ROCK, TokenType.SCISSORS],
};

const GameArea = () => {
  const {
    playerMove,
    computerMove,
    roundEnded,
    setRoundEnded,
    setComputerMove,
    resetMoves,
    incrementWins,
    incrementLosses,
  } = useGameStore();

  const [showWinner, setShowWinner] = useState(false);

  const computerChoice = useCallback(() => {
    const choices: TokenType[] = Object.values(TokenType);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }, []);

  const determineWinner = (player: TokenType, computer: TokenType) => {
    if (!player || !computer) return null;

    return rules[player].includes(computer)
      ? WinnerType.PLAYER
      : rules[computer].includes(player)
      ? WinnerType.COMPUTER
      : WinnerType.TIE;
  };

  const startNewRound = () => {
    setRoundEnded(false);
    resetMoves();
  };

  const getTokenComponent = (type: TokenType, isComputer = false) => {
    const token = tokens.find((t) => t.type === type);
    if (!token) return null;
    const TokenComponent = token.component;

    const winner =
      playerMove && computerMove
        ? determineWinner(playerMove, computerMove)
        : null;
    const isWinner =
      winner === (isComputer ? WinnerType.COMPUTER : WinnerType.PLAYER);

    return (
      <Box
        sx={{
          animation:
            isWinner && showWinner
              ? `${shakeAnimation} 0.5s ease-in-out infinite`
              : "none",
        }}
      >
        <TokenComponent color={isComputer ? TokenColor.RED : TokenColor.BLUE} />
      </Box>
    );
  };

  useEffect(() => {
    startNewRound();
  }, []);

  useEffect(() => {
    if (playerMove && !roundEnded) {
      const timer = setTimeout(() => {
        setComputerMove(computerChoice());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [playerMove, roundEnded, computerChoice, setComputerMove]);

  useEffect(() => {
    if (!playerMove && !computerMove) {
      setShowWinner(false);
    }
  }, [playerMove, computerMove]);

  useEffect(() => {
    if (computerMove) {
      const timer = setTimeout(() => {
        setShowWinner(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [computerMove]);

  useEffect(() => {
    if (playerMove && computerMove && !roundEnded) {
      const result = determineWinner(playerMove, computerMove);
      if (result === WinnerType.PLAYER) {
        incrementWins();
      } else if (result === WinnerType.COMPUTER) {
        incrementLosses();
      }
      setRoundEnded(true);
    }
  }, [
    playerMove,
    computerMove,
    roundEnded,
    setRoundEnded,
    incrementWins,
    incrementLosses,
  ]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Box sx={sx.mainContainer}>
        <Fade in={Boolean(playerMove)} timeout={500}>
          <Box>{playerMove && getTokenComponent(playerMove)}</Box>
        </Fade>

        <Box
          sx={{
            typography: "h4",
            visibility: playerMove ? "visible" : "hidden",
          }}
        >
          VS
        </Box>

        <Fade in={Boolean(computerMove)} timeout={500}>
          <Box>{computerMove && getTokenComponent(computerMove, true)}</Box>
        </Fade>

        <Fade in={Boolean(playerMove && computerMove)} timeout={500}>
          <Box sx={sx.playAgainContainer}>
            <Button variant="contained" color="primary" onClick={startNewRound}>
              Play Again
            </Button>
          </Box>
        </Fade>
      </Box>
      <TokenGrid />
    </Box>
  );
};

export default GameArea;
