import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS, CUSTOM_MODAL_MARGIN_IN_REM } from "styles/theme";

export const ModalContainer = styled(Stack)`
  flex-direction: ${({ direction }) => direction || "column"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) =>
    width || `calc(100vw - ${CUSTOM_MODAL_MARGIN_IN_REM}rem)`};
  height: ${({ height }) =>
    height || `calc(100vh - ${CUSTOM_MODAL_MARGIN_IN_REM}rem)`};
  background-color: ${COLORS.WHITE};
  border-radius: 0.75rem;
  overflow: hidden;
  outline: none;
`;

export const ModalMainPanel = styled(Stack)`
  flex-grow: 99;
  order: 1;
  ${({ theme }) => theme.mixins.flexboxOverflowHack}
`;

export const ModalMainPanelContent = styled(Stack)`
  flex-grow: 99;
  overflow: auto;
`;
