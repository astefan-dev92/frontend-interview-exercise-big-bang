import { PropsWithChildren } from "react";

import { Box, Grow } from "@mui/material";

import { TokenColor } from "../../types";

const sx = {
  circle: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    m: 2,
    cursor: "pointer",
  },
};

interface TokenProps {
  color: TokenColor;
}

const Token = ({ color, children }: PropsWithChildren<TokenProps>) => {
  return (
    <Grow in={true} timeout={1000}>
      <Box sx={sx.circle} bgcolor={color}>
        {children}
      </Box>
    </Grow>
  );
};
export default Token;
