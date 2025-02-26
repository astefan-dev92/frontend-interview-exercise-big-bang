import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandLizard } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import { Tooltip } from "@mui/material";

import Token from "./Token";
import { TokenColor } from "../../types";

interface LizardTokenProps {
  color?: TokenColor;
  size?: SizeProp;
}

const LizardToken = ({ color = TokenColor.BLUE, size = "4x" }: LizardTokenProps) => {
  return (
    <Token color={color}>
      <Tooltip title="Lizard">
        <FontAwesomeIcon icon={faHandLizard} color="white" size={size} />
      </Tooltip>
    </Token>
  );
};
export default LizardToken;
