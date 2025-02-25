import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandLizard } from "@fortawesome/free-solid-svg-icons";

import Token from "./Token";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface LizardTokenProps {
  color?: "white";
  size?: SizeProp;
}
const LizardToken = ({ color = "white", size = "4x" }: LizardTokenProps) => {
  return (
    <Token>
      <FontAwesomeIcon
        icon={faHandLizard}
        color={color}
        size={size}
        title="Lizard Hand"
      />
    </Token>
  );
};
export default LizardToken;
