import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


function Login(){

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    try {

      const response = await api.post("/login", {

        email,
        password

      });


      console.log("LOGIN RESPONSE:", response.data);


      const token = response.data.token;


      localStorage.setItem("token", token);


      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;


      navigate("/profile");


    } catch(error) {

      console.error("Login failed:", error);

      alert("Invalid email or password");

    }

  };



  return (

    <div className="auth-page">


      <div className="auth-card">


        <h1>
          Welcome Back 🌸
        </h1>


        <p>
          Login to your Little Scents account.
        </p>



        <input

          type="email"

          placeholder="Email address"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />



        <button onClick={handleLogin}>

          Login ✨

        </button>



        <p className="auth-switch">

          Don't have an account?

          {" "}

          <Link to="/register">

            Create one

          </Link>


        </p>



      </div>


    </div>

  );

}


export default Login;