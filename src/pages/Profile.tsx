import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


interface User {

  id:number;
  name:string;
  email:string;

}



function Profile(){

const navigate = useNavigate();
  const [user,setUser] = useState<User | null>(null);

  const handleLogout = () => {

  localStorage.removeItem("token");

  delete api.defaults.headers.common["Authorization"];

  navigate("/login");

};



  useEffect(()=>{


    const token = localStorage.getItem("token");


    if(token){

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;


      api.get("/user")

      .then((response)=>{


        console.log("USER RESPONSE:", response.data);


        setUser(response.data);


      })

      .catch((error)=>{


        console.error(
          "Failed to load user:",
          error
        );


      });

    }


  },[]);




  if(!user){

    return <h2>Loading profile... 🌸</h2>;

  }




  return (

    <div className="profile-page">


      <section className="profile-card">


        <div className="profile-icon">
          👧🏽
        </div>



        <h1>
          Hello, {user.name} 🌸
        </h1>



        <p>
          Welcome to your Little Scents account.
        </p>



        <div className="profile-details">


          <div>

            <span>Name</span>

            <strong>
              {user.name}
            </strong>

          </div>




          <div>

            <span>Email</span>

            <strong>
              {user.email}
            </strong>

          </div>



        </div>




        <div className="profile-actions">


          <Link to="/orders">
            📦 Order History
          </Link>



          <Link to="/cart">
            🛒 My Cart
          </Link>



          <Link to="/shop">
            🌸 Continue Shopping
          </Link>

          <button onClick={handleLogout}>
  🚪 Logout
</button>



        </div>



      </section>


    </div>

  );

}


export default Profile;