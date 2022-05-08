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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useSnackbar } from "notistack";
import Router from "next/router";
import { Context } from "../context/authContext";
import Head from "next/head";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user !== null) Router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      enqueueSnackbar("Successfully registered!", {
        variant: "success",
        autoHideDuration: 1700,
      });
      localStorage.setItem("email", JSON.stringify(email));
      setTimeout(() => {
        enqueueSnackbar("Please login to continue", {
          variant: "success",
          autoHideDuration: 1700,
        });
        Router.push("/login");
      }, 2000);
      console.log(result);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1500,
      });
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>Register | AUTHY</title>
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
              REGISTER
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
                helperText="Password sholud contain atleast 6 characters"
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
                disabled={!email || !password || password.length < 6}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <p className="mt-2">
                    Already have an account?
                    <Link href="/login">
                      <span className="text-orange-500 font-bold ml-2 cursor-pointer">
                        Login Now
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

export default register;
