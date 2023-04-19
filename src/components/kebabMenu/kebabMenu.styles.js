import { Menu, styled } from "@mui/material";
import { FONT } from "styles/theme";

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    box-shadow: 0.375rem 0.125rem 0.625rem rgb(0 0 0 / 24%);
    border-radius: 0.18rem;
  }
  .MuiTypography-root {
    font-weight: ${FONT.WEIGHT.MEDIUM};
    font-size: ${FONT.SIZES[12]};
    line-height: ${FONT.LINE_HEIGHTS[16]};
  }
  .MuiList-padding {
    padding: 0;
  }
  .MuiMenuItem-root {
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1.5)};
    padding-left: ${({ theme }) => theme.spacing(1.5)};
    padding-right: ${({ theme }) => theme.spacing(1.6)};
  }
`;
