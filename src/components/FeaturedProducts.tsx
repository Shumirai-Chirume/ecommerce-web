import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";


interface Product {

  id: number;
  name: string;
  price: string;
  image_url: string;
  brand: string;
  description: string;
  is_featured: boolean;

}



function FeaturedProducts(){

  const [products, setProducts] = useState<Product[]>([]);



  useEffect(()=>{

    api.get("/products")

      .then((response)=>{

        console.log("PRODUCT RESPONSE:", response.data);

        setProducts(response.data.data.products);

      })

      .catch((error)=>{

        console.error("Failed to fetch products:", error);

      });


  },[]);



  return (

    <section className="featured-section">


      <h2>
        Featured Little Scents 🌸
      </h2>


      <p className="featured-subtitle">
        Our most loved fragrances for little scent explorers.
      </p>



      <div className="featured-grid">


        {products
          .filter(product => product.is_featured)
          .map((product)=>(


          <div 
            className="featured-card"
            key={product.id}
          >


            <div className="bottle">
              🧴
            </div>


            <h3>
              {product.name}
            </h3>


            <p>
              {product.brand}
            </p>


            <strong>
              ${product.price}
            </strong>


            <Link to={`/product/${product.id}`}>
  <button>
    View Details
  </button>
</Link>


          </div>


        ))}


      </div>


    </section>

  );

}


export default FeaturedProducts;