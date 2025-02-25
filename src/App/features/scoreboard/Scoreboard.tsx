import { Card, CardContent, Typography } from "@mui/material";

const Scoreboard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Scoreboard
        </Typography>
        <Typography variant="body2">
          Wins: 0 <br />
          Losses: 0
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Scoreboard;
