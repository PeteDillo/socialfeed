import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import DisplayPost from "./DisplayPost/DisplayPost";
import CreatePost from "./CreatePost/CreatePost";
import "./App.scss";
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
      <div className="content">
        <div className="formContainer">
          <div className="form">
            <CreatePost setPost={addNewPost} />
          </div>
        </div>
        <div className="displayContainer">
            <DisplayPost posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
