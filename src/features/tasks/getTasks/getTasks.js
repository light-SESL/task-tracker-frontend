import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import { Box, ListItemText, MenuItem, Stack, Typography } from "@mui/material";
import { COLORS } from "styles/theme";
import { AppContext } from "App";
import DataGridContainer from "components/dataGridContainer/dataGridContainer";
import DataGrid from "elements/dataGrid/dataGrid";
import KebabMenu from "components/kebabMenu/kebabMenu";
import DeleteModal from "components/deleteModal/deleteModal";
import Navbar from "components/navbar/navbar";
import { getAllTasks, deleteATask } from "../tasks.api";
import { MUIStack } from "../tasks.styles";
import AddTask from "../addTask/addTask";
import EditTask from "../editTask/editTask";

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
    field: "taskStatus",
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
          <Typography variant="w7">
            {params.value && dayjs(params.value).format("MM/DD/YYYY h:mm A")}
          </Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "action",
    headerName: "",
    flex: 1,
    minWidth: 110,
    renderCell: (params) => {
      const { reload, setReload } = useContext(AppContext);
      const [openEdit, setOpenEdit] = useState(false);
      const [openDelete, setOpenDelete] = useState(false);

      const { id, title } = params.row;

      const handleDelete = async (taskId) => {
        await deleteATask(taskId);
        setOpenDelete(false);
        setReload(!reload);
      };

      return (
        <MUIStack justifyContent="space-evenly" width="100%" pr={4}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            gap={2.3}
            data-testid="custom-element"
          >
            <Box mt={1}>
              <Typography
                variant="w9"
                onClick={() => setOpenEdit(true)}
                taskId={id}
              >
                Edit Client
              </Typography>
            </Box>
            <KebabMenu color={COLORS.BLUE} width="1rem" height="1rem">
              <Box>
                <MenuItem>
                  <ListItemText
                    sx={{ color: COLORS.RED }}
                    onClick={() => setOpenDelete(true)}
                  >
                    Remove
                  </ListItemText>
                </MenuItem>
              </Box>
            </KebabMenu>
            {openEdit && (
              <EditTask
                setOpen={setOpenEdit}
                title="Edit Client"
                taskId={id}
                reloadOnEdit={reload}
                setReloadOnEdit={setReload}
              />
            )}
            {openDelete && (
              <DeleteModal
                open={openDelete}
                handleClick={() => setOpenDelete(false)}
                title={title}
                handleRemoveClick={() => handleDelete(id)}
                subtitle={title}
              />
            )}
          </Stack>
        </MUIStack>
      );
    },
  },
];

const GetTasks = () => {
  const { reload, tokenData } = useContext(AppContext);
  const [tasks, setTasks] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [taskHeadings, setTaskHeadings] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();
      const filteredTasks = data?.filter((task) =>
        task?.title.toLowerCase().includes(searchParams?.toLowerCase())
      );

      const cleanedTasks = filteredTasks.map((item) => ({
        ...item,
        id: item._id,
        taskStatus: item.status,
      }));
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
  }, [reloadPage, reload, searchParams]);

  return (
    <>
      <Navbar username={tokenData?.username || ""} />
      <DataGridContainer
        headings={taskHeadings}
        setOpenAdd={setOpenAdd}
        buttonTitle="Add Task"
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      >
        <DataGrid
          columns={columns}
          rows={tasks}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
          searchParams={searchParams}
        />
      </DataGridContainer>
      {openAdd && (
        <AddTask
          setOpen={setOpenAdd}
          reloadPage={reloadPage}
          setReloadPage={setReloadPage}
          taskTitle="Add Task"
        />
      )}
    </>
  );
};

export default GetTasks;
