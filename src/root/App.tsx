import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "../pages/posts/Posts";
import Users from "../pages/users/Users";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
