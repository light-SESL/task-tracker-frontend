import { FormControl as MUIFormControl, styled } from "@mui/material";

export const FormControl = styled(MUIFormControl)`
  width: ${({ width }) => width || "100%"};
`;
