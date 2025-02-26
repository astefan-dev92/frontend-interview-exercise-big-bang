import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { tokens } from "../tokens";

import useGameStore from "../../../../store";
import { TokenType } from "../../types";

const TokenGrid = () => {
  const { playerMove, computerMove, setPlayerMove } = useGameStore();

  const selectToken = (type: TokenType) => {
    if (playerMove || computerMove) return;
    setPlayerMove(type);
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
      {tokens.map(({ type, component: TokenComponent }) => (
        <Grid key={type}>
          <Box
            onClick={() => selectToken(type)}
            sx={{
              opacity: playerMove ? 0.5 : 1,
              transition: "opacity 0.3s",
              cursor: playerMove ? "default" : "pointer",
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
