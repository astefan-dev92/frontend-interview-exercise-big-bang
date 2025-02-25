import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-solid-svg-icons";

import Token from "./Token";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface SpockTokenProps {
  color?: "white";
  size?: SizeProp;
}
const SpockToken = ({ color = "white", size = "4x" }: SpockTokenProps) => {
  return (
    <Token>
      <FontAwesomeIcon
        icon={faHandSpock}
        title="Spock Hand"
        color={color}
        size={size}
      />
    </Token>
  );
};
export default SpockToken;
