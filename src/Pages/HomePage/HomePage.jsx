import { About } from "../../components/About/About";
import { Slick } from "../../components/Slick/Slick";

export const Home = () => {
  return (
    <main>
      <section>
        <About />
      </section>
      <section>
        <Slick />
      </section>
    </main>
  );

  //     <>
  //       {error && <h1>{error}</h1>}
  //       {isLoading && <h2>Loding...</h2>}
  //       <h1>Trending today</h1>
  //       <FilmsList films={films} />
  //     </>
  //   );
};
// export default Home;
