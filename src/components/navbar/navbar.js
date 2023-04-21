import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { AppContext } from "../../App";

const Navbar = ({ username }) => {
  const navigate = useNavigate();
  const { userToken } = useContext(AppContext);
  const handleClick = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const decoded = userToken && jwt_decode(userToken);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <Stack direction="row">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              mt={1.2}
            >
              {decoded?.username ? decoded.username : username}
            </Typography>
            <Button
              variant="text"
              color="inherit"
              onClick={handleClick}
              sx={{ textTransform: "none" }}
            >
              Log Out
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
