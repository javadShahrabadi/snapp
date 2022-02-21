import Head from "next/head";
import About from "../../components/About";
export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>snapp-about</title>
        <meta
          name="description"
          content="snapp - created by javad shahrabadi"
        />
        <link rel="icon" href="https://snapp.ir/v2/favicon.ico" />
      </Head>
      <About />
    </div>
  );
}
