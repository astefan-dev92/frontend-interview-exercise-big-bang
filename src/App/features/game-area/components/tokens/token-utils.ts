import LizardToken from "./LizardToken";
import PaperToken from "./PaperToken";
import RockToken from "./RockToken";
import ScissorsToken from "./ScissorsToken";
import SpockToken from "./SpockToken";

import { TokenType } from "../../types";

const tokens = [
  { type: TokenType.ROCK, component: RockToken },
  { type: TokenType.PAPER, component: PaperToken },
  { type: TokenType.SCISSORS, component: ScissorsToken },
  { type: TokenType.LIZARD, component: LizardToken },
  { type: TokenType.SPOCK, component: SpockToken },
];

export { tokens };
