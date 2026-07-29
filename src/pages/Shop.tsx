import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";


interface Product {

  id:number;
  name:string;
  brand:string;
  price:string;
  description:string;
  is_featured:boolean;

}



function Shop(){


  const [products,setProducts] = useState<Product[]>([]);



  useEffect(()=>{

  api.get("/products")

  .then((response)=>{

    console.log("SHOP PRODUCTS:", response.data);

    setProducts(response.data.data.products);

  })

  .catch((error)=>{

    console.error("Failed to load products:", error);

  });


},[]);





  return (

    <div className="shop-page">


      <section className="shop-header">


        <h1>
          Explore Little Scents 🌸
        </h1>


        <p>
          Gentle fragrances made for every little journey.
        </p>


      </section>





      <section className="shop-grid">


        {products.map((product)=>(


          <div
            className="shop-card"
            key={product.id}
          >


            <div className="bottle">
  🧴
</div>



            <p className="shop-brand">
              {product.brand}
            </p>



            <h2>
              {product.name}
            </h2>



            <strong>
              ${product.price}
            </strong>



            <Link
              to={`/product/${product.id}`}
            >

              View Scent ✨

            </Link>



          </div>


        ))}



      </section>


    </div>

  );

}


export default Shop;