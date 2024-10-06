import "./App.css";
import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';



function CreateUser() {


  const user = {
    id: "",
    user_name: "",
    city: "",
    email: "",
    password: ""
  };
  
  const navigate = useNavigate();

  var userArr=[];

  useEffect(() => {

    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/users", { headers })
      .then((response) => response.json())
      .then((data) => {
        userArr = data;

        document.getElementById("id").value=userArr.length+1;
        
      });
  
}, []);


  var id = "";
  var naam = "";
  var email = "";

  function Create() {
   

    user.id = document.getElementById("id").value;
    console.log(typeof id);

    user.user_name = document.getElementById("naam").value;
    console.log(typeof naam);

    user.city = document.getElementById("city").value;
    console.log(typeof city);

    user.email = document.getElementById("email").value;
    console.log(typeof email);

    user.password = document.getElementById("password").value;
    console.log(typeof password);

    if(user.user_name&&user.city&&user.email&&user.password){
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);
          
          document.getElementById("id").value = userArr.length+2;
          document.getElementById("naam").value = "";
          document.getElementById("city").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
  
        
        });
  
        navigate('/home');

    }
    else{
      alert("Please fill the fields")
    }




  }

  return (
    <div className="container mt-5 border border-primary">
      <h1>Create user</h1>
      <br></br>
      <div>
        <label>ID </label>
        <input
          type="number"
          className="form-control"
          id="id"
          placeholder="Enter Your ID "
          disabled
        />
      </div>
      <br></br>
      <div>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
        />
      </div>
      <br></br>
      <div>
        <label>City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="Enter Your City"
        />
      </div>
      <br></br>
      <div>
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <br></br>

      <div>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
        />
      </div>

      <br></br>
      <div>
        <button className="btn btn-primary" onClick={Create}>
          Create User
        </button>
      </div>
      <br></br>
     
    </div>
  );
}

export default CreateUser;
