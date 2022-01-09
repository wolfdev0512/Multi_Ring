import type { AppProps } from "next/app";
import "../styles/globals.css";
// import Banner from "../views/Banner";
import Layout from "../layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Banner /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
