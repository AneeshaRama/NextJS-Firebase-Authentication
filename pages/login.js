import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useSnackbar } from "notistack";
import Router from "next/router";
import { Context } from "../context/authContext";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user !== null) Router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      enqueueSnackbar("Successfully logged in!", {
        variant: "success",
        autoHideDuration: 1700,
      });
      localStorage.setItem("user", JSON.stringify(result.user));
      dispatch({
        type: "LOGIN",
        payload: result.user,
      });
      Router.push("/secret");
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1700,
      });
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>Login | AUTHY</title>
        </Head>
        <Container component="main" maxWidth="xs">
          <Box className="mt-5 flex flex-col items-center">
            <Avatar className="bg-orange-500">
              <LockOutlined />
            </Avatar>
            <Typography
              className="text-gray-800 font-bold mt-2"
              component="h1"
              variant="h5"
            >
              LOGIN
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                autoFocus
                required
                type="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="on"
                color="warning"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                color="warning"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-orange-500 mt-2 hover:bg-orange-600"
                disabled={!email || !password}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <p className="mt-2">
                    Don't have an account?
                    <Link href="/register">
                      <span className="text-orange-500 font-bold ml-2 cursor-pointer">
                        Register Now
                      </span>
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Login;
