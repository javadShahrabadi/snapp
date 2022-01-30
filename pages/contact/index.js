import Head from "next/head";
import Main from "../components/contact/Main";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>snapp-contact</title>
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
