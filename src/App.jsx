import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
