import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </>
  );
}
