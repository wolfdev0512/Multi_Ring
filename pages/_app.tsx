import type { AppProps } from "next/app";
// import Banner from "../views/Banner";
import Layout from "../layouts";
import "../styles/globals.css";

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
