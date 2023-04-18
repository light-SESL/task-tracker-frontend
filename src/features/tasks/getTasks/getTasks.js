import React, { useEffect, useState } from "react";
import { getAllTasks } from "../tasks.api";
import DataGridContainer from "components/dataGridContainer/dataGridContainer";
import DataGrid from "elements/dataGrid/dataGrid";
import { Stack, Typography } from "@mui/material";
import { MUIStack } from "../tasks.styles";

const columns = [
  { field: "id", headerName: "ID", width: 0 },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "priority",
    headerName: "Priority",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "sample",
    headerName: "Status",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
];

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [taskHeadings, setTaskHeadings] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();
      const cleanedTasks = data.map((item) => {
        item.id = item._id;
        item.sample = item.status;
        return item;
      });
      const headings = [
        {
          title1: "Tasks Created",
          title2: null,
        },
        {
          title1: cleanedTasks.length,
          title2: "Tasks",
        },
      ];
      setTaskHeadings(headings);
      setTasks(cleanedTasks);
    })();
  }, []);
  return (
    <DataGridContainer
      headings={taskHeadings}
      setOpenAdd={setOpenAdd}
      buttonTitle="Add Task"
    >
      <DataGrid
        columns={columns}
        rows={tasks}
        rowHeight={2.7}
        height="27rem"
        headerHeight={2}
        hideColumn="id"
      />
    </DataGridContainer>
  );
};

export default GetTasks;
