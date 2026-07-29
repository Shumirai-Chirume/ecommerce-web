import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";


interface Product {

  id: number;
  name: string;
  brand: string;
  price: string;
  description: string;
  image_url: string;

  category: {
    id: number;
    name: string;
  };

  scent_type: string;
  size: string;
  stock_quantity: number;

}



function ProductDetails(){


  const { id } = useParams();


  const [product, setProduct] = useState<Product | null>(null);



  const addToCart = async () => {


    if(!product){

      return;

    }



    try {


      const token = localStorage.getItem("token");



      if(!token){

        alert("Please login before adding items to cart 🌸");

        return;

      }



      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;



      const response = await api.post("/cart/add", {

        product_id: product.id,

        quantity: 1

      });



      console.log(
        "CART RESPONSE:",
        response.data
      );



      alert(`${product.name} added to cart 🛒`);



    } catch(error){


      console.error(
        "Failed to add cart item:",
        error
      );


      alert("Could not add item to cart");


    }


  };





  useEffect(()=>{


    api.get(`/products/${id}`)

      .then((response)=>{


        console.log(
          "PRODUCT DETAILS:",
          response.data
        );


        setProduct(
          response.data.data.product
        );


      })


      .catch((error)=>{


        console.error(
          "Failed to load product:",
          error
        );


      });



  }, [id]);





  if(!product){


    return <h2>Loading product... 🌸</h2>;


  }





  return (


    <div className="product-details-page">


      <section className="product-details-card">



        <div className="product-image-large">

          🧴

        </div>





        <div className="product-info">



          <p className="product-brand">

            {product.brand}

          </p>





          <h1>

            {product.name}

          </h1>





          <p>

            {product.description}

          </p>





          <div className="product-info-box">


            <strong>

              Category:

            </strong>



            <span>

              {product.category.name}

            </span>



          </div>





          <div className="product-info-box">


            <strong>

              Size:

            </strong>



            <span>

              {product.size}

            </span>



          </div>





          <div className="notes">


            <h3>

              Scent Notes 🌸

            </h3>



            <span>

              {product.scent_type}

            </span>



          </div>





          <h2 className="product-price">

            ${product.price}

          </h2>





          <button onClick={addToCart}>

            Add to Cart 🛒

          </button>





        </div>



      </section>



    </div>


  );


}



export default ProductDetails;