import Head from "next/head";
import Main from "../components/jobs/Main";

export default function JobsPage() {
  return (
    <div>
      <Head>
        <title>snapp-jobs</title>
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
