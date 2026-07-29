import { Link } from "react-router-dom";

function ShopByAge() {

  const ageGroups = [

{
title:"Baby Scents 👶",
description:"Soft and gentle fragrances for precious little moments."
},

{
title:"Toddler Treasures 🧸",
description:"Playful scents for curious little explorers."
},

{
title:"Preteen Collection 🎒",
description:"Fresh scents for growing personalities."
},

{
title:"Teen Essentials ✨",
description:"Trendy fragrances for young confidence."
}

];


  return (

<section className="age-section">


  <div className="age-banner">

    <div className="banner-icon">
      🌸
    </div>

    <h3>
      Little Scents
    </h3>

    <p>
      Growing beautifully,
      one fragrance at a time.
    </p>

  </div>



  <div className="age-content">

    <h2>
      Find Their Perfect Scent 🌸
    </h2>

    <p>
      Gentle fragrances designed for every stage of growing up.
    </p>


    <div className="age-cards">

      {ageGroups.map((group) => (

        <div className="age-card" key={group.title}>

          <h3>
            {group.title}
          </h3>

          <p>
            {group.description}
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


</section>

);
}


export default ShopByAge;