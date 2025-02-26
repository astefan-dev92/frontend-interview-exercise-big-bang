import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import useGameStore from "../../../../store";

import { tokens, getWinner, getRandomToken } from "../tokens/token-utils";

import { TokenType, WinnerType } from "../../types";

const TokenGrid = () => {
  const {
    playerMove,
    computerMove,
    setPlayerMove,
    setComputerMove,
    incrementWins,
    incrementLosses,
    setRoundEnded,
    resetMoves,
  } = useGameStore();

  const selectToken = (type: TokenType) => {
    if (playerMove || computerMove) {
      resetMoves();
      setRoundEnded(false);
      return;
    }
    
    const computerChoice = getRandomToken();
    setPlayerMove(type);
    setComputerMove(computerChoice);
    
    const winner = getWinner(type, computerChoice);
    if (winner === WinnerType.PLAYER) {
      incrementWins();
    } else if (winner === WinnerType.COMPUTER) {
      incrementLosses();
    }
    
    setRoundEnded(true);
  };

  return (
    <Grid container spacing={2} justifyContent="center" p={2}>
      {tokens.map(({ type, component: TokenComponent }) => (
        <Grid key={type}>
          <Box
            onClick={() => selectToken(type)}
            sx={{
              opacity: playerMove ? 0.5 : 1,
              transition: "opacity 0.3s",
              cursor: "pointer",
            }}
          >
            <TokenComponent />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TokenGrid;
