import { Link } from "react-router-dom";

function Collections(){

  const collections = [
    {
      icon:"👶",
      title:"Baby Collection",
      description:"Soft and gentle scents made for precious little ones."
    },

    {
      icon:"🧸",
      title:"Toddler Collection",
      description:"Playful fragrances for curious little explorers."
    },

    {
      icon:"🌸",
      title:"Preteen Collection",
      description:"Fresh and fun scents for growing personalities."
    },

    {
      icon:"✨",
      title:"Teen Collection",
      description:"Beautiful fragrances for confident young individuals."
    }
  ];


  return (

    <div className="collections-page">


      <h1>
        Little Scents Collections 🌈
      </h1>


      <p>
        Discover fragrances designed for every stage of growing up.
      </p>



      <div className="collection-grid">


        {collections.map((collection,index)=>(

          <div
            className="collection-card"
            key={index}
          >

            <div className="collection-icon">
              {collection.icon}
            </div>


            <h2>
              {collection.title}
            </h2>


            <p>
              {collection.description}
            </p>


            <Link to="/shop">
  <button>
    Explore 🌸
  </button>
</Link>


          </div>

        ))}


      </div>


    </div>

  );

}


export default Collections;
