import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayPost from "./components/DisplayPost/DisplayPost";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  const [posts, setPost] = useState([
    {
      body: "I love life or something",
      user: "Pedro D",
      date: "2022-03-30",
    },
  ]);


  function addNewPost(post) {
    let temp = [...posts, post];
    setPost(temp);
  }



  return (
    <div className="App">
      <NavBar />
      <CreatePost  setPost={addNewPost}/>
      <DisplayPost posts={posts} />
    </div>
  );
}

export default App;
