import { Card, CardContent, Typography } from "@mui/material";

import useGameStore from "../../store";

const GameArea = () => {
    const { player } = useGameStore();
    
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Welcome, {player}!
        </Typography>
        <Typography variant="body1">Choose your move!</Typography>
      </CardContent>
    </Card>
  );
};
export default GameArea;
