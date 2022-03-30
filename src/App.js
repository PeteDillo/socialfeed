import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayPost from "./components/DisplayPost/DisplayPost";

function App() {
  const [posts, setPost] = useState([
    {
      body: "I love life or something",
      user: "Pedro D",
      date: "03-29-2022",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      
      <DisplayPost posts={posts} />
    </div>
  );
}

export default App;
