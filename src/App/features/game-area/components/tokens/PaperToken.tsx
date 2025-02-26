import { Tooltip } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";
import { TokenColor } from "../../types";

interface PaperTokenProps {
  color?: TokenColor;
  size?: SizeProp;
}
const PaperToken = ({ color = TokenColor.BLUE, size = "4x" }: PaperTokenProps) => {
  return (
    <Token color={color}>
      <Tooltip title="Paper">
        <FontAwesomeIcon icon={faHandPaper} color="white" size={size} />
      </Tooltip>
    </Token>
  );
};
export default PaperToken;
