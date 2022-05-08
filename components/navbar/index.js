import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import Link from "next/link";
import DrawerComp from "./DrawerComp";
import { Context } from "../../context/authContext";
import { useSnackbar } from "notistack";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
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
      <AppBar position="static" className="bg-orange-500">
        <Toolbar className="flex justify-between">
          <Link href={"/"}>
            <a>
              <Typography
                variant="h4"
                className="font-bold text-gray-800  italic "
              >
                <span className="text-white">AU</span>THY
              </Typography>
            </a>
          </Link>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <div className="flex text-white">
                <Link href={"/secret"}>
                  <a>
                    <Typography className="font-semibold text-red-900 text-xl tracking-widest">
                      Secret!
                    </Typography>
                  </a>
                </Link>

                {user !== null ? (
                  <>
                    <Link href={"/"}>
                      <a className="ml-6">
                        <Typography
                          className="font-semibold"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Typography>
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={"/login"}>
                      <a className="ml-6">
                        <Typography className="font-semibold">Login</Typography>
                      </a>
                    </Link>
                    <Link href={"/register"}>
                      <a className="ml-6">
                        <Typography className="font-semibold">
                          Register
                        </Typography>
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
