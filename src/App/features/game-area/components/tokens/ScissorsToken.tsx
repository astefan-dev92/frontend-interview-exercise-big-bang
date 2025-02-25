import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";

interface ScissorsTokenProps {
  color?: "white";
  size?: SizeProp;
}
const ScissorsToken = ({
  color = "white",
  size = "4x",
}: ScissorsTokenProps) => {
  return (
    <Token>
      <FontAwesomeIcon
        icon={faHandScissors}
        title="Scissors Hand"
        color={color}
        size={size}
      />
    </Token>
  );
};
export default ScissorsToken;
