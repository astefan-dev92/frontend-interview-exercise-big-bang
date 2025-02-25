import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";

interface PaperTokenProps {
  color?: "white";
  size?: SizeProp;
}
const PaperToken = ({ color = "white", size = "4x" }: PaperTokenProps) => {
  return (
    <Token>
      <FontAwesomeIcon
        icon={faHandPaper}
        title="Paper Hand"
        color={color}
        size={size}
      />
    </Token>
  );
};
export default PaperToken;
