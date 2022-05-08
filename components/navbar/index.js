import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="static" className="bg-orange-500">
        <Toolbar className="flex justify-between">
          <Link href={"/"}>
            <a>
              <Typography
                variant="h4"
                className="font-bold text-white  italic "
              >
                LOGO
              </Typography>
            </a>
          </Link>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <div className="flex text-white">
                <Link href={"/login"}>
                  <a>
                    <Typography className="font-semibold">Login</Typography>
                  </a>
                </Link>
                <Link href={"/register"}>
                  <a className="ml-6">
                    <Typography className="font-semibold">Register</Typography>
                  </a>
                </Link>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
