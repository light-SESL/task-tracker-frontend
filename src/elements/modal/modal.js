import React from "react";
import { Modal as MuiModal } from "@mui/material";
import {
  ModalContainer,
  ModalMainPanel,
  ModalMainPanelContent,
} from "./modal.styles";

export const Modal = ({ children, open, onClose, width, height, ...props }) => (
  <MuiModal open={open} onClose={onClose} {...props}>
    <ModalContainer width={width} height={height} direction="column">
      <ModalMainPanel>
        <ModalMainPanelContent>{children}</ModalMainPanelContent>
      </ModalMainPanel>
    </ModalContainer>
  </MuiModal>
);

export default Modal;
