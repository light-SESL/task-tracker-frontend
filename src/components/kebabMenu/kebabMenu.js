import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Fade, IconButton, SvgIcon } from "@mui/material";
import { StyledMenu } from "./kebabMenu.styles";

export const KebabMenu = ({ children, width, height, color }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <SvgIcon
          sx={{
            width: width || "1rem",
            height: height || "1rem",
            color,
          }}
        >
          <ArrowDropDownIcon />
        </SvgIcon>
      </IconButton>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {children}
      </StyledMenu>
    </>
  );
};

export default KebabMenu;
