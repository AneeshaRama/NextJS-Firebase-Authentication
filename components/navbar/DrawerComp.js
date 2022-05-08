import {
  Cancel,
  Key,
  Logout,
  Menu,
  Person,
  PersonAdd,
} from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { Context } from "../../context/authContext";
import Link from "next/link";
import { useSnackbar } from "notistack";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  const { enqueueSnackbar } = useSnackbar();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    enqueueSnackbar("Successfully logged out", {
      variant: "success",
      autoHideDuration: 1700,
    });
  };

  return (
    <>
      <Drawer open={openDrawer} anchor="right" onClose={closeDrawer}>
        <div className="bg-gray-700 h-screen">
          <div className="flex">
            <IconButton onClick={closeDrawer}>
              <Cancel className="text-white" />
            </IconButton>
          </div>
          <List className="w-[60vw] flex flex-col items-center">
            <Link href={"/secret"}>
              <a>
                <ListItemButton onClick={closeDrawer}>
                  <ListItemIcon>
                    <Key className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText primary="Secret !" className="text-white" />
                </ListItemButton>
              </a>
            </Link>
            {user !== null ? (
              <>
                <Link href={"/"}>
                  <a>
                    <ListItemButton onClick={closeDrawer}>
                      <ListItemIcon>
                        <Logout className="text-white" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Logout"
                        className="text-white"
                        onClick={logoutHandler}
                      />
                    </ListItemButton>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <a>
                    <ListItemButton onClick={closeDrawer}>
                      <ListItemIcon>
                        <Person className="text-white" />
                      </ListItemIcon>
                      <ListItemText primary="Login" className="text-white" />
                    </ListItemButton>
                  </a>
                </Link>
                <Link href={"/register"}>
                  <a>
                    <ListItemButton onClick={closeDrawer}>
                      <ListItemIcon>
                        <PersonAdd className="text-white mr-5" />
                      </ListItemIcon>
                      <ListItemText primary="Register" className="text-white" />
                    </ListItemButton>
                  </a>
                </Link>
              </>
            )}
          </List>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu className="text-white text-3xl" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
