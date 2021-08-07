import Head from "next/head";
import { useState } from "react";

import { Header, Banner, ExploreCard } from "../components";

export default function Home({ exploreData }) {
  // const [data, setData] = useState(exploreData);

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

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby.</h2>

          {/* fetch data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {exploreData?.map((data, index) => {
              const { img: image, location, distance } = data;

              return (
                <ExploreCard
                  key={index}
                  image={image}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://links.papareact.com/pyp");
  const exploreData = await response.json();

  return {
    props: {
      exploreData,
    },
  };
}
