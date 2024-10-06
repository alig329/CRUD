// import "./App.css";
import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';



function CreatePost() {


  const posts = {
    id: "",
    user_name: "",
    post_title: "",
    post_body: "",
  };
  
  const navigate = useNavigate();

  var userArr=[];

  useEffect(() => {

    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/posts", { headers })
      .then((response) => response.json())
      .then((data) => {
        userArr = data;

        document.getElementById("id").value=userArr.length+1;
        
      });
  
}, []);


  var id = "";
  var username = "";
  var title = "";
  var body = "";

  function Create() {
   

    posts.id = document.getElementById("id").value;
    console.log(typeof id);

    posts.user_name = document.getElementById("username").value;
    console.log(typeof username);

    // user.city = document.getElementById("city").value;
    // console.log(typeof city);

    posts.post_title = document.getElementById("title").value;
    console.log(typeof title);

    posts.post_body = document.getElementById("body").value;
    console.log(typeof body);

    if(posts.id&&posts.user_name&&posts.post_title&&posts.post_body){
      fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(posts),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);
          
          document.getElementById("id").value = userArr.length+2;
          document.getElementById("userrname").value = "";
          document.getElementById("title").value = "";
          document.getElementById("body").value = "";
          // document.getElementById("password").value = "";
  
        
        });
  
        navigate('/home');

    }
    else{
      alert("Please fill the fields")
    }




  }

  return (
    <div className="container mt-5 border border-primary">
      <h1>Create Post</h1>
      <br></br>
      <div>
        <label>ID </label>
        <input
          type="number"
          className="form-control"
          id="id"
          placeholder="Enter Post ID "
          disabled
        />
      </div>
      <br></br>
      <div>
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter Username"
        />
      </div>
      <br></br>
      <div>
        <label>Post title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter post title"
        />
      </div>
      <br></br>
      <div>
        <label>Post Body</label>
        <input
          type="text"
          className="form-control"
          id="body"
          placeholder="Write something..."
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
          Create Post
        </button>
      </div>
      <br></br>
     
    </div>
  );
}

export default CreatePost;
