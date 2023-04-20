import * as Yup from "yup";
import {
  TITLE_REQUIRED,
  DESCRIPTION_REQUIRED,
  STATUS_REQUIRED,
  DUE_DATE_REQUIRED,
} from "constants/features/tasks";

export const addTaskYupObject = Yup.object({
  title: Yup.string().required(TITLE_REQUIRED),
  description: Yup.string().required(DESCRIPTION_REQUIRED),
  status: Yup.string().required(STATUS_REQUIRED),
  dueDate: Yup.string().required(DUE_DATE_REQUIRED),
});
