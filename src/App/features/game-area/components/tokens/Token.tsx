import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const sx = {
  circle: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "#4A90E2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Token = ({ children }: PropsWithChildren) => {
  return <Box sx={sx.circle}>{children}</Box>;
};
export default Token;
