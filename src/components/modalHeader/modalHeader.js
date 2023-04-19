import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ModalHeader = ({ children, title, subTitle, ...props }) => (
  <Stack direction="row" justifyContent="space-between" {...props}>
    <Box>
      <Typography variant="w10" component="p">
        {title}
      </Typography>
      {subTitle ? (
        <Typography variant="w11" component="p">
          {subTitle}
        </Typography>
      ) : null}
    </Box>
    {children ? <Box>{children}</Box> : null}
  </Stack>
);

export default ModalHeader;
