import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";


function Register(){

  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");



  const handleRegister = async () => {


    if(password !== passwordConfirmation){

      alert("Passwords do not match");

      return;

    }



    try {


      const response = await api.post("/register", {

        name,

        email,

        password,

        password_confirmation: passwordConfirmation

      });



      console.log("REGISTER RESPONSE:", response.data);



      alert("Account created successfully 🌸");


      navigate("/login");



    } catch(error){


      console.error(
        "Registration failed:",
        error
      );


      alert("Could not create account");


    }


  };




  return (

    <div className="auth-page">


      <div className="auth-card">


        <h1>
          Create Your Account 🌸
        </h1>


        <p>
          Join Little Scents and discover gentle fragrances made for every age.
        </p>



        <input

          type="text"

          placeholder="Full name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />



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



        <input

          type="password"

          placeholder="Confirm password"

          value={passwordConfirmation}

          onChange={(e)=>setPasswordConfirmation(e.target.value)}

        />



        <button onClick={handleRegister}>

          Create Account ✨

        </button>



        <p className="auth-switch">


          Already have an account?


          {" "}


          <Link to="/login">

            Login

          </Link>


        </p>



      </div>


    </div>

  );

}


export default Register;