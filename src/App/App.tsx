import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Welcome } from "./features/welcome";
import { Rules } from "./features/rules";
import { Scoreboard } from "./features/scoreboard";
import { GameArea } from "./features/game-area";

import automataLogo from "../assets/automata.png";
import "./App.css";

function App() {
  return (
    <Box height="100vh">
      <Box display="flex" justifyContent="center" alignItems="center">
        <a href="https://automata.tech/" target="_blank" rel="noreferrer">
          <img
            src={String(automataLogo)}
            className="logo automata"
            alt="Automata logo"
          />
        </a>
      </Box>

      <Welcome />

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <GameArea />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Scoreboard />
          <Rules />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
