import React from "react";
import { StyledButton } from "./customButton.style";

function CustomButton({
  children,
  width,
  background,
  fontcolor,
  hoverbackground,
  border,
  variant,
  dataTestId,
  ...props
}) {
  return (
    <StyledButton
      width={width}
      background={background}
      hoverbackground={hoverbackground}
      fontcolor={fontcolor}
      border={border}
      variant={variant}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
