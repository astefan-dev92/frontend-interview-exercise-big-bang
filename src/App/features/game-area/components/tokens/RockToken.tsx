import { Tooltip } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";
import { TokenColor } from "../../types";

interface RockTokenProps {
  color?: TokenColor;
  size?: SizeProp;
}
const RockToken = ({ color = TokenColor.BLUE, size = "4x" }: RockTokenProps) => {
  return (
    <Token color={color}>
      <Tooltip title="Rock">
        <FontAwesomeIcon icon={faHandRock} color="white" size={size} />
      </Tooltip>
    </Token>
  );
};
export default RockToken;
