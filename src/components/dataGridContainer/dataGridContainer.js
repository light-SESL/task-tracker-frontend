import React from "react";
import {
  Box,
  Container as MUIContainer,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Container,
  MuiStack,
  MUITextField,
  SvgIcon,
} from "./dataGridContainer.styles";

export const DataGridContainer = ({
  children,
  margin,
  border,
  headings,
  setOpenAdd,
  buttonTitle,
  setSearchParams,
  searchParams,
}) => (
  <MUIContainer>
    <Container width="100%" margin={margin} border={border}>
      <Stack direction="row" justifyContent="space-between" mb={1.5}>
        <Stack direction="row" justifyContent="space-evenly" gap={4.5}>
          {headings?.map((data, i) => (
            <Stack
              justifyContent="space-evenly"
              mt={1.4}
              mb={0.8}
              key={i}
              ml={3.5}
            >
              {i === 0 ? (
                <Box width="13rem">
                  <Typography component="p" variant="w12">
                    {data?.title1}
                  </Typography>
                </Box>
              ) : (
                <Typography component="p" variant="w12">
                  {data?.title1}
                </Typography>
              )}

              <Box width="7rem">
                <Typography component="p" variant="w13">
                  {data?.title2}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" mt={2} mb={0.5} mr={5} gap={2}>
          <MUITextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ marginTop: 0 }}>
                  <SvgIcon>
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            width="15rem"
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Search tasks"
          />
          <MuiStack justifyContent="space-evenly" sx={{ width: "9.5rem" }}>
            <Typography
              variant="w9"
              onClick={() => setOpenAdd(true)}
              data-testid="add-client"
              sx={{ cursor: "pointer" }}
            >
              {buttonTitle}
            </Typography>
          </MuiStack>
        </Stack>
      </Stack>

      {children}
    </Container>
  </MUIContainer>
);

export default DataGridContainer;
