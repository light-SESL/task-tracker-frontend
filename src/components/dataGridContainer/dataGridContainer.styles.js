import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "styles/theme";

export const Container = styled("div")`
  width: ${({ width }) => width};
  height: auto;
  margin: ${({ margin, theme }) => margin || theme.spacing(5, 0)};
  padding: 0;
  border: ${({ border }) => border || `0.063rem solid ${COLORS.MEDIUM_GREY}`};
  border-radius: 0.325rem;
`;

export const MuiStack = styled(Stack)`
  border: 0.063rem solid ${COLORS.BLUE};
  padding: 0.5rem 2rem;
  border-radius: 0.325rem;
`;
