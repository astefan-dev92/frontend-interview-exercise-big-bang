import { Card, CardContent, Typography, Button, Box } from "@mui/material";

import useGameStore from "../../store";

const Scoreboard = () => {
  const { player, wins, losses, resetScore } = useGameStore();

  return (
    <Card>
      <CardContent>
        {player && (
          <Typography variant="h5" gutterBottom>
            Welcome, {player}!
          </Typography>
        )}
        <Typography variant="h6" gutterBottom>
          Scoreboard
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            Wins: {wins} <br />
            Losses: {losses}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={resetScore}
        >
          Reset Score
        </Button>
      </CardContent>
    </Card>
  );
};

export default Scoreboard;
