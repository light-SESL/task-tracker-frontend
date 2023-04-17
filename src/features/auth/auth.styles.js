import { Stack as MUIStack } from "@mui/material";
import { styled } from "@mui/system";

export const Stack = styled(MUIStack)`
  margin-top: ${({ theme }) => theme.spacing(15)};
`;
