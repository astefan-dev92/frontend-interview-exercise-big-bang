import { ChangeEvent, KeyboardEvent, useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import useGameStore from "../../store";

const Welcome = () => {
  const { player, setPlayer } = useGameStore();

  const [open, setOpen] = useState<boolean>(!player);

  const setPlayerName = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPlayer(event.target.value);
  };

  const attemptSubmit = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && player) {
      dismissDialog();
    }
  };

  const dismissDialog = () => setOpen(false);

  return (
    <Dialog open={open}>
      <DialogTitle>Ready to Play?</DialogTitle>
      <DialogContent>
        <Box>
          <Box>Let&apos;s play Rock, Paper, Scissors, Lizard, Spock!</Box>
          <Box mt={2}>
            <TextField
              variant="outlined"
              onChange={setPlayerName}
              onKeyDown={attemptSubmit}
              fullWidth
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Button
            disabled={!player}
            onClick={dismissDialog}
            variant="contained"
          >
            Let&apos;s Play
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
export default Welcome;
