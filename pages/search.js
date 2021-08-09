import { Footer, Header, ResultCards } from "../components";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (searchResults) {
      setIsLoading(false);
    }
  }, [searchResults]);

  const { location, startDate, numberGuests, endDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");

  const rangeDate = `${formattedStartDate} — ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${rangeDate} | ${numberGuests}`} />

      <main className="flex">
        {/* LEFT CONTENT */}
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {rangeDate} - for {numberGuests} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button-filter">Cancellation Flexibility</p>
            <p className="button-filter">Type of Place</p>
            <p className="button-filter">Price</p>
            <p className="button-filter">Rooms and Beds</p>
            <p className="button-filter">More Filters</p>
          </div>

          {isLoading ? (
            <h1>Loading ...</h1>
          ) : (
            <div className="flex flex-col">
              {searchResults?.map((result, index) => {
                const {
                  description,
                  img,
                  location,
                  title,
                  total,
                  price,
                  star,
                } = result;

                return (
                  <ResultCards
                    key={index}
                    image={img}
                    location={location}
                    description={description}
                    title={title}
                    total={total}
                    price={price}
                    star={star}
                  />
                );
              })}
            </div>
          )}
        </section>
        {/* RIGHT CONTENT */}
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
