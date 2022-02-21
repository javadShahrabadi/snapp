import Head from "next/head";
import Main from "./../components/Main.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>snapp-home</title>
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
