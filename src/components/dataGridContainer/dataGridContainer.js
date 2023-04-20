import React from "react";
import {
  Box,
  Container as MUIContainer,
  Stack,
  Typography,
} from "@mui/material";
import { Container, MuiStack } from "./dataGridContainer.styles";

export const DataGridContainer = ({
  children,
  margin,
  border,
  headings,
  setOpenAdd,
  buttonTitle,
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
        <MuiStack justifyContent="space-evenly" mt={2} mb={0.5} mr={5}>
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

      {children}
    </Container>
  </MUIContainer>
);

export default DataGridContainer;
