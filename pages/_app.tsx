// import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/index";
import CssBaseline from "@mui/material/CssBaseline";
import MainNavbar from "../components/MainNavbar";
import ContainerBody from "../components/ContainerBody";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainNavbar />
          <ContainerBody>
            <Component {...pageProps} />
          </ContainerBody>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default MyApp;
