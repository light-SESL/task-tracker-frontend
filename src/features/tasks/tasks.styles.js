import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { FONT } from "styles/theme";

export const MUIStack = styled(Stack)`
  height: 100%;
`;

export const StyledBox = styled(Box)`
  display: inline;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const StyledTypography = styled(Typography)`
  font-weight: ${FONT.WEIGHT.LIGHT};
`;
