import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import Token from "./Token";

interface RockTokenProps {
  color?: "white";
  size?: SizeProp;
}
const RockToken = ({ color = "white", size = "4x" }: RockTokenProps) => {
  return (
    <Token>
      <FontAwesomeIcon
        icon={faHandRock}
        title="Rock Hand"
        color={color}
        size={size}
      />
    </Token>
  );
};
export default RockToken;
