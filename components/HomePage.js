import { Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>AUTHY</title>
      </Head>
      <div className="flex items-center justify-center h-[65vh] flex flex-col">
        <Typography className="text-2xl text-green-600 font-bold">
          WELCOME ! !
        </Typography>
        <Typography className="mt-6 text-xl text-gray-900 tracking-wide">
          Please click the{" "}
          <span className="text-red-500 font-bold">"Secret! "</span> link in the
          menu and get access to secret message ! !
        </Typography>
        <Typography className="mt-4 text-sm">OR</Typography>
        <Link href={"/secret"}>
          <a>
            <Button className="bg-orange-500 hover:bg-orange-600 mt-4 text-white p-3">
              Click here
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
