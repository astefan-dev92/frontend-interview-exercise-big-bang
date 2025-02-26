import { Tooltip } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";
import { TokenColor } from "../../types";

interface SpockTokenProps {
  color?: TokenColor;
  size?: SizeProp;
}
const SpockToken = ({ color = TokenColor.BLUE, size = "4x" }: SpockTokenProps) => {
  return (
    <Token color={color}>
      <Tooltip title="Spock">
        <FontAwesomeIcon icon={faHandSpock} color="white" size={size} />
      </Tooltip>
    </Token>
  );
};
export default SpockToken;
