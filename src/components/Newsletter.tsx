function Newsletter(){

  return (

    <section className="newsletter-section">


      <div className="newsletter-content">


        <h2>
          Join the Little Scents Family 🌸
        </h2>


        <p>
          Get updates on new scents, special offers,
          and little surprises made for growing up beautifully.
        </p>



        <div className="newsletter-form">


          <input
            type="email"
            placeholder="Enter your email"
          />


          <button
  onClick={() => alert("Thank you for subscribing 🌸")}
>
  Subscribe ✨
</button>


        </div>


      </div>


    </section>

  );

}


export default Newsletter;