import automataLogo from '../assets/automata.png'
import './App.css'

import { Box, Button } from '@mui/material'

function App() {
  return (
    <>
      <div>
        <a href="https://automata.tech/" target="_blank">
          <img src={String(automataLogo)} className="logo automata" alt="Automata logo"/>
        </a>
      </div>
      <h1>Frontend Exercise</h1>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2>

      <Box>
        <Button>Play!</Button>
      </Box>
    </>
  )
}

export default App
