import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { TokenGrid } from "./components/token-grid";
import {
  LizardToken,
  PaperToken,
  RockToken,
  ScissorsToken,
  SpockToken,
} from "./components/tokens";
import { getWinner, getWinnerMessage } from "./components/tokens/token-utils";

import { TokenColor, TokenType, WinnerType } from "./types";

import useGameStore from "../../store";

const tokenComponents = {
  [TokenType.ROCK]: RockToken,
  [TokenType.PAPER]: PaperToken,
  [TokenType.SCISSORS]: ScissorsToken,
  [TokenType.LIZARD]: LizardToken,
  [TokenType.SPOCK]: SpockToken,
};

const GameArea = () => {
  const { playerMove, computerMove, roundEnded, resetMoves, setRoundEnded } =
    useGameStore();

  const PlayerToken = playerMove ? tokenComponents[playerMove] : null;
  const ComputerToken = computerMove ? tokenComponents[computerMove] : null;

  const winner =
    playerMove && computerMove ? getWinner(playerMove, computerMove) : null;
  const resultMessage = winner ? getWinnerMessage(winner) : "";

  const restartRound = () => {
    resetMoves();
    setRoundEnded(false);
  };

  return (
    <Box>
      <TokenGrid />

      {roundEnded && (
        <>
          <Typography
            variant="h4"
            align="center"
            sx={{
              my: 2,
              color:
                winner === WinnerType.PLAYER
                  ? "success.main"
                  : winner === WinnerType.COMPUTER
                  ? "error.main"
                  : "text.primary",
            }}
          >
            {resultMessage}
          </Typography>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid>
              <Typography variant="h6" align="center" gutterBottom>
                Your Move
              </Typography>
              {PlayerToken && <PlayerToken color={TokenColor.BLUE} />}
            </Grid>

            <Grid>
              <Typography variant="h6" align="center" gutterBottom>
                Computer&apos;s Move
              </Typography>
              {ComputerToken && <ComputerToken color={TokenColor.RED} />}
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={restartRound}
              size="large"
            >
              Play Again
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default GameArea;
