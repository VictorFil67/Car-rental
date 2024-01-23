// import { getMovies } from "API/movies";
// import { useEffect, useState } from "react";
// import { FilmsList } from "../components/FilmsList/FilmsList";

import { Slick } from "../../components/Slick/Slick";

export const Home = () => {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [films, setFilms] = useState([]);
  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         setIsLoading(true);
  //         setError(null);
  //         const { results } = await getMovies();
  //         setFilms(results);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     getData();
  //   }, []);
  //   return (
  return (
    <main>
      {/* <div>Home</div> */}
      <section>Adout</section>
      <Slick />
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
