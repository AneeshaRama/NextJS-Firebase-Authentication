import { StyledEngineProvider, Slide } from "@mui/material";
import Layout from "../components/Layout";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";
import { DataProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <DataProvider>
          <SnackbarProvider TransitionComponent={Slide}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </DataProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
