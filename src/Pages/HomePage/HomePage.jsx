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
};
