import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    console.log("adding Soon");
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl max-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
