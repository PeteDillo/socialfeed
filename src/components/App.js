import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import DisplayPost from "./DisplayPost/DisplayPost";
import CreatePost from "./CreatePost/CreatePost";

function App() {
  const [posts, setPost] = useState([
    {
      body: "Wow, what a beautiful app!",
      user: "Pedro D",
      date: "2022-03-29",
    },
  ]);

  function addNewPost(post) {
    let temp = [...posts, post];
    setPost(temp);
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <CreatePost setPost={addNewPost} />
          </div>
        </div>
        <div className="col">
          <div className="col col-lg-2">
            <DisplayPost posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
