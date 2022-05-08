import { Cancel, Menu, Person, PersonAdd } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = () => {
    setOpenDrawer(false);
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
            <Link href={"/login"}>
              <a>
                <ListItemButton onClick={closeDrawer}>
                  <ListItemIcon>
                    <Person className="text-white" />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
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
          </List>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu className="text-white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
