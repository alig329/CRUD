import { useEffect, useState } from "react";

function Home() {
  const [postsArr, setPostsArr] = useState([]);
  // var postsArr = [];

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3001/posts", { headers })
      .then((response) => response.json())
      .then((data) => {
        setPostsArr(data);

        console.log(postsArr);

        // console.log(data)
      });
  }, []);

  return (
    <div className="container mt-5 border border-primary">
      <h1>Posts of Users by Their User Name</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Post Title</th>
            <th scope="col">Post Body</th>
            <th scope="col">User Name</th>
          </tr>
        </thead>
        <tbody>  
        {postsArr.map(posts=> (
          <tr key={posts.id}>
             <td> 
             {" "}
             <b>{posts.id}</b>
             </td>  
            <td> 
            {" "}
            <b>{posts.post_title}</b>
            </td>   
            <td> {posts.post_body}</td> 
            <td> {posts.user_name} </td>
          
          </tr>

        ))}
        

        </tbody>
      </table>

      
      
    </div>
  );
}

export default Home;
