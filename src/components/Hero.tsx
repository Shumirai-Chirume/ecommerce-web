import { Link } from "react-router-dom";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-text">

        <h1>
          Every Age Has Its Own Signature Scent 🌸
        </h1>

        <p>
          Gentle fragrances thoughtfully created
          for babies, toddlers, preteens, and teens.
        </p>


        <Link to="/collections">
  <button>
    Explore Collection 🌸
  </button>
</Link>

      </div>


      <div className="hero-image">

        🧴🌸

      </div>


    </section>

  );

}


export default Hero;