import Head from "next/head";
import Main from "../components/blog/Main";
export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>snapp-blog</title>
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
