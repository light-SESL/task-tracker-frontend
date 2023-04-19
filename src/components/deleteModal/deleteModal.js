import React from "react";
import { Stack, Typography } from "@mui/material";
import { COLORS } from "styles/theme";
import Modal from "elements/modal/modal";
import CustomButton from "elements/customButton/customButton";

import { StyledStack, StyledTypography } from "./deleteModal.styles";

export const DeleteModal = ({
  open,
  title,
  handleClick,
  handleRemoveClick,
  subtitle,
}) => (
  <Modal
    open={open}
    onClose={() => handleClick()}
    width="28.1rem"
    height="10.9rem"
  >
    <StyledStack>
      <Stack direction="row">
        <Typography component="p" variant="h3">
          <strong>Delete {title}</strong>
        </Typography>
      </Stack>
      <Stack direction="row" mt={1}>
        {subtitle && (
          <Typography component="p" variant="h5">
            <strong>&ldquo;{subtitle}&rdquo;</strong> will be removed
          </Typography>
        )}
      </Stack>
      <Stack
        spacing={2.5}
        direction="row"
        mt={3.3}
        mb={4}
        justifyContent="space-evenly"
      >
        <CustomButton width="4.37rem" onClick={() => handleClick()}>
          <Typography variant="w11" color={COLORS.LIGHT_RED}>
            Keep
          </Typography>
        </CustomButton>
        <CustomButton
          width="6.62rem"
          background={COLORS.LIGHT_RED}
          hoverbackground={COLORS.LIGHT_RED}
          border={`0.063 solid ${COLORS.LIGHT_RED}`}
          onClick={() => handleRemoveClick()}
        >
          <StyledTypography variant="w11" color={COLORS.WHITE}>
            Remove
          </StyledTypography>
        </CustomButton>
      </Stack>
    </StyledStack>
  </Modal>
);

export default DeleteModal;
