import { Card, CardContent, Typography } from "@mui/material";

const Rules = () => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Rules
        </Typography>
        <Typography variant="body2">
          - Rock crushes Scissors <br />
          - Scissors cuts Paper <br />
          - Paper covers Rock <br />
          - Rock crushes Lizard <br />
          - Lizard poisons Spock <br />
          - Spock smashes Scissors <br />
          - Scissors decapitates Lizard <br />
          - Lizard eats Paper <br />
          - Paper disproves Spock <br />- Spock vaporizes Rock
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Rules;
