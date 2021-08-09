import { Footer, Header } from "../components";

const Search = () => {
  return (
    <div>
      <Header />

      <main className="flex">
        {/* LEFT CONTENT */}
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

          <div className="">
            <p className="button-filter">Cancellation Flexibility</p>
            <p className="button-filter">Type of Place</p>
          </div>
        </section>
        {/* RIGHT CONTENT */}
      </main>

      <Footer />
    </div>
  );
};

export default Search;
