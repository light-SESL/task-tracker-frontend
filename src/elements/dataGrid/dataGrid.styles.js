import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { COLORS } from "styles/theme";
import StraightIcon from "@mui/icons-material/Straight";

export const MUIDataGrid = styled(DataGrid)`
  border: 0;
  .MuiDataGrid-columnHeaders {
    background-color: ${COLORS.LIGHT_BLUE};
    font-size: 1rem;
    font-weight: 300;
    border-radius: 0;
  }

  .MuiDataGrid-columnSeparator {
    display: none;
  }
  .MuiDataGrid-columnHeader {
    border-right: 0.063rem solid ${COLORS.DARK_GREY};
    margin-left: ${({ theme }) => theme.spacing(1)};
    &:hover {
      font-weight: 900;
    }
    &:nth-last-of-type(-n + 2) {
      border-right: none;
    }
  }
  .MuiDataGrid-columnHeaderTitle {
    font-weight: lighter;
  }

  .MuiDataGrid-cell {
    border: none;
  }
  .MuiDataGrid-row {
    border: 0.063rem solid ${COLORS.MEDIUM_GREY};
    border-radius: 0.125rem;
    width: 99%;
    margin: ${({ theme }) => theme.spacing(1.5)} auto
      ${({ theme }) => theme.spacing(0.313)} auto;
    cursor: pointer;
    font-weight: 700;
    height: 10rem;
  }
`;

export const DownIcon = styled(StraightIcon)`
  transform: rotateX(180deg);
`;
