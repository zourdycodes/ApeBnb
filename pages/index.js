import Head from "next/head";

import {
  Header,
  Banner,
  ExploreCard,
  FeaturesCard,
  Jumbotron,
} from "../components";

export default function Home({ exploreData, featuresData }) {
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

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {featuresData?.map((cardData, index) => {
              const { img, title } = cardData;

              return <FeaturesCard key={index} image={img} title={title} />;
            })}
          </div>
        </section>

        {/* JUMBOTRON */}
        <Jumbotron
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curates by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (dataRes) => dataRes.json()
  );

  const featuresData = await fetch("https://links.papareact.com/zp1").then(
    (dataRes) => dataRes.json()
  );

  return {
    props: {
      exploreData,
      featuresData,
    },
  };
}
