import Head from "next/head";
import Main from "../components/rider_cloop/Main";

export default function RiderCloopPage() {
  return (
    <div>
      <Head>
        <title>باشگاه رانندگان</title>
        <meta
          name="description"
          content="snapp - created by javad shahrabadi"
        />
        <link rel="icon" href="https://snapp.ir/v2/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
