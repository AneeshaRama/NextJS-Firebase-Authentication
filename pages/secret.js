import React, { useContext } from "react";
import { Context } from "../context/authContext";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import Head from "next/head";

const secret = () => {
  const {
    state: { user },
  } = useContext(Context);
  return (
    <>
      <Head>
        <title>Secret page</title>
      </Head>
      <div className="h-[65vh] flex flex-col justify-center items-center ">
        {user !== null ? (
          <>
            <Typography className="text-2xl text-red-600 mb-5 font-bold">
              SECRET ! !{" "}
            </Typography>
            <div className="flex flex-col items-start bg-yellow-200 p-5 rounded-2xl">
              <div className="flex mt-5">
                <Typography className="flex items-center font-bold text-gray-700">
                  <span className="text-xl text-green-500 font-bold mr-3">
                    JOHN:
                  </span>
                  Do you know about the content of that secret page?
                </Typography>
              </div>
              <div className="flex mt-5">
                <Typography className="flex items-center font-bold text-gray-700">
                  <span className="text-xl text-blue-500 font-bold mr-3">
                    DAVID:
                  </span>
                  YUP ! !
                </Typography>
              </div>
              <div className="flex mt-5">
                <Typography className="flex items-center font-bold text-gray-700">
                  <span className="text-xl text-green-500 font-bold mr-3">
                    JOHN:
                  </span>
                  What is it? Tell me...
                </Typography>
              </div>
              <div className="flex mt-5">
                <Typography className="flex items-center font-bold text-gray-700">
                  <span className="text-xl text-blue-500 font-bold mr-3">
                    DAVID:
                  </span>
                  Oops...I am sorry...It's top SECRET ! ! 🤣🤣🤣🤣
                </Typography>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-red-600 text-xl sm:text-2xl md:text-3xl">
              Please login to access the content of this page!!!
            </h1>
            <Link href={"/login"}>
              <a>
                <Button
                  variant="contained"
                  size="mediaum"
                  className="bg-orange-500 hover:bg-orange-600 mt-8"
                >
                  Login right now !
                </Button>
              </a>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default secret;
