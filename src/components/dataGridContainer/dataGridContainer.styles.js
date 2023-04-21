import { Stack, SvgIcon as MuiSvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS, FONT } from "styles/theme";
import TextField from "../../elements/textField/textField";

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

export const MUITextField = styled(TextField)`
  width: 15.75rem;
  height: 2.875rem;
  background-color: ${COLORS.GREY_95};
  border: none !important;
  margin-right: 5rem;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiInputBase-input {
    color: ${COLORS.DARK_GREY};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[14]};
    padding: ${({ theme }) => theme.spacing(2.1, 0)};
  }
  .MuiInputAdornment-positionStart {
    margin-top: 0;
  }
`;

export const SvgIcon = styled(MuiSvgIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;
