import Head from "next/head";

import { Header, Banner } from "../components";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBnb: Search your lovable spot!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />
      {/* BANNER */}
      <Banner />
    </div>
  );
}
