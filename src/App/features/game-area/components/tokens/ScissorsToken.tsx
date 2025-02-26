import { Tooltip } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";
import { TokenColor } from "../../types";

interface ScissorsTokenProps {
  color?: TokenColor;
  size?: SizeProp;
}
const ScissorsToken = ({
  color = TokenColor.BLUE,
  size = "4x",
}: ScissorsTokenProps) => {
  return (
    <Token color={color}>
      <Tooltip title="Scissors">
        <FontAwesomeIcon icon={faHandScissors} color="white" size={size} />
      </Tooltip>
    </Token>
  );
};
export default ScissorsToken;
