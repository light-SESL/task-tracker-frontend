import React from "react";
import { Form } from "formik";
import dayjs from "dayjs";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomButton from "elements/customButton/customButton";
import Modal from "elements/modal/modal";
import { COLORS } from "styles/theme";
import {
  IconButton,
  CloseIcon,
  MUITextField,
  ModalBody,
} from "./taskModal.styles";
import ModalHeader from "../modalHeader/modalHeader";

const TaskModal = ({ setOpen, title, formik }) => {
  const { handleSubmit, values, touched, errors, handleChange, setFieldValue } =
    formik;
  const defaultDate = dayjs(values.dueDate);
  return (
    <Modal
      open
      aria-labelledby="New Study Modal"
      width="29.25rem"
      height="auto"
      onClose={() => setOpen(false)}
    >
      {" "}
      <Form id="clients" onSubmit={handleSubmit}>
        <Grid container p={4} pb={2}>
          <Grid item xs={12}>
            <ModalHeader title={title} mb={3}>
              <IconButton
                data-testid="close"
                onClick={() => setOpen(false)}
                pt={5}
              >
                <CloseIcon />
              </IconButton>
            </ModalHeader>
            <Divider />
            <ModalBody>
              <Box mt={2}>
                <Typography variant="w7">Title</Typography>
                <MUITextField
                  size="small"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Description</Typography>
                <MUITextField
                  size="small"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Status</Typography>
                <FormControl
                  size="small"
                  variant="filled"
                  sx={{ mt: 1.3, width: "100%" }}
                >
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    error={touched.status && Boolean(errors.status)}
                    label="Status"
                    sx={{ "& .MuiSelect-root": { mt: 1.3 } }}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Due Date</Typography>
                <Box mt={2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      size="small"
                      name="dueDate"
                      value={defaultDate}
                      onChange={(value) =>
                        setFieldValue("dueDate", value, true)
                      }
                      error={touched.dueDate && Boolean(errors.dueDate)}
                      helperText={touched.dueDate && errors.dueDate}
                      inputFormat="dd/MM/yyyy"
                      sx={{
                        width: "100%",
                        backgroundColor: "#eee",
                        border: "none",
                      }}
                      renderInput={(params) => (
                        <MUITextField
                          {...params}
                          variant="filled"
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      )}
                      views={["year", "month", "day"]}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box mt={2}>
                <CustomButton
                  type="submit"
                  width="100%"
                  variant="contained"
                  background={COLORS.LIGHT_BLUE}
                  hoverbackground={COLORS.LIGHT_BLUE}
                  dataTestId="save"
                >
                  Save
                </CustomButton>
              </Box>
            </ModalBody>
          </Grid>
        </Grid>
      </Form>
    </Modal>
  );
};

export default TaskModal;
