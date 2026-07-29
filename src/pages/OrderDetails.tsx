import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";


interface OrderItem {

  id:number;

  quantity:number;

  product:{
    name:string;
    price:string;
  };

}



interface Order {

  id:number;

  total:string;

  status:string;

  created_at:string;

  items:OrderItem[];

}



function OrderDetails(){


  const { id } = useParams();


  const [order,setOrder] = useState<Order | null>(null);



  useEffect(()=>{


    const token = localStorage.getItem("token");


    if(token){

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

    }



    api.get(`/orders/${id}`)

    .then((response)=>{


      console.log(
        "ORDER DETAILS RESPONSE:",
        response.data
      );


      setOrder(response.data.order);


    })

    .catch((error)=>{


      console.error(
        "Failed to load order:",
        error
      );


    });



  },[id]);





  if(!order){

    return (

      <h2>
        Loading order... 📦
      </h2>

    );

  }





  return (

    <div className="order-details-page">


      <div className="order-details-card">


        <h1>
          Order Details 📦
        </h1>



        <p className="order-number">

          Order #{order.id}

        </p>




        <div className="status">

          {order.status}

        </div>





        <section className="details-section">


          <h2>
            Order Date
          </h2>


          <p>

            {new Date(order.created_at)
            .toLocaleDateString()}

          </p>


        </section>







        <section className="details-section">


          <h2>
            Items Purchased
          </h2>



          {order.items.map((item)=>(


            <div
              className="order-item"
              key={item.id}
            >


              <span>

                🧴 {item.product.name}

                {" "}
                × {item.quantity}

              </span>



              <span>

                $
                {(
                  Number(item.product.price)
                  *
                  item.quantity

                ).toFixed(2)}

              </span>


            </div>



          ))}



        </section>







        <section className="details-section">


          <div className="summary-row">


            <span>
              Shipping
            </span>


            <span>
              Free
            </span>


          </div>





          <div className="summary-row total">


            <span>
              Total
            </span>


            <span>

              ${order.total}

            </span>


          </div>


        </section>







        <Link to="/orders">


          <button>

            ← Back to Orders

          </button>


        </Link>



      </div>


    </div>


  );


}


export default OrderDetails;