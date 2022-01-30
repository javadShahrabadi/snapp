import Head from "next/head";
import Login from "../components/Login.jsx";
export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>snapp-login</title>
        <meta
          name="description"
          content="snapp - created by javad shahrabadi"
        />
        <link rel="icon" href="https://snapp.ir/v2/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
