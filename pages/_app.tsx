import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import ReactGA from "react-ga";

const TRACKING_ID = "G-THJNXZ0HED";
ReactGA.initialize(TRACKING_ID);

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
