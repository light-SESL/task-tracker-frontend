import {
  IconButton as MuiIconButton,
  Stack as MuiStack,
  styled,
} from "@mui/material";
import { Close as MuiCloseIcon } from "@mui/icons-material";
import { COLORS, FONT } from "styles/theme";
import TextField from "../../elements/textField/textField";

export const CloseIcon = styled(MuiCloseIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${COLORS.SKY_BLUE};
  margin-top: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const IconButton = styled(MuiIconButton)`
  padding: 0;
  :hover {
    background: none;
  }
`;

export const ModalBody = styled(MuiStack)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const MUITextField = styled(TextField)`
  width: 100%;
  height: 3.125rem;
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiInputBase-input {
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[14]};
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    padding: ${({ theme }) => theme.spacing(2.3, 0, 2, 2.3)};
  }
`;
