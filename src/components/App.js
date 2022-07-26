import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      
      <Header blogname={blogData.name} />
      <About picture={blogData.image} aboutblog={blogData.about} />
      <ArticleList postarticle={blogData.posts}  />
    </div>
  );
}

export default App;
