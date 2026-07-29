import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";


interface Product {

  name: string;

}



interface OrderItem {

  id: number;
  quantity: number;
  product: Product;

}



interface Order {

  id: number;
  total: string;
  created_at: string;
  items: OrderItem[];

}



function OrderHistory(){


  const [orders, setOrders] = useState<Order[]>([]);



  useEffect(()=>{


    const token = localStorage.getItem("token");


    if(token){

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

    }



    api.get("/orders")

      .then((response)=>{


        console.log(
          "ORDERS RESPONSE:",
          response.data
        );


        setOrders(response.data.orders);


      })

      .catch((error)=>{


        console.error(
          "Failed to load orders:",
          error
        );


      });



  },[]);





  return (


    <div className="orders-page">


      <section className="orders-container">


        <h1>
          My Orders 📦
        </h1>


        <p>
          Keep track of your Little Scents adventures.
        </p>




        {orders.length === 0 ? (


          <h3>
            No orders yet 🌸
          </h3>



        ) : (



        <div className="orders-list">


          {orders.map((order)=>(



            <div
              className="order-card"
              key={order.id}
            >



              <div className="order-top">


                <div>


                  <h3>
                    Order #{order.id}
                  </h3>



                  <span className="order-status">
                    Completed
                  </span>


                </div>



                <strong>

                  ${order.total}

                </strong>


              </div>





              <div className="order-products">


                {order.items.map((item)=>(


                  <div
                    key={item.id}
                  >

                    🧴 {item.product.name}


                    <span>

                      {" "}
                      × {item.quantity}

                    </span>


                  </div>


                ))}



              </div>





              <Link
                to={`/orders/${order.id}`}
              >

                <button>

                  View Details

                </button>


              </Link>



            </div>



          ))}



        </div>


        )}



      </section>


    </div>


  );

}


export default OrderHistory;