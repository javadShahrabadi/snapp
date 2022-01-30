import Head from "next/head";
import Main from "../components/rider_register/Main";
export default function RiderRegisterPage() {
  return (
    <div>
      <Head>
        <title>ثبت نام رانندگان</title>
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
