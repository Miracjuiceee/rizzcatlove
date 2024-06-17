import RizzCat from "../assets/og_cat_no_bg.webp";

import "./hero.css";

function Hero() {
  return (
    <>
      <main>
        <article>
          <h1>$RIZZ FOR</h1>
          <img src={RizzCat} alt='' srcset='' />
          <p>
            {" "}
            noun:/slang/ <br />
            <br /> short for "charisma" <br /> See also: the rizzler; rizz god;
            rizzly bear <br /> <br />
            Rizz is more than just slang; it’s an essence, an aura, a
            phenomenon. It embodies charisma—the innate ability to attract,
            charm, and seduce effortlessly. Having rizz is possessing that
            elusive quality that turns heads and captures hearts. <br /> <br />
            <span className='red'>
              Are you ready to join the ultimate community of charisma and
              charm? Whether you're a natural rizzler or looking to boost your
              rizz game, this is the place for you!
            </span>
          </p>
        </article>
      </main>
    </>
  );
}

export default Hero;
