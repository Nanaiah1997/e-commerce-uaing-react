import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./product";
import Login from "./login";
import Cart from "./cart";

import Myorder from "./order";
import Myproduct from "./myproduct";

//localStorage.setItem("adminid", 100); // temprary we are creating a localStorage

function App() {
  if (localStorage.getItem("adminid") == null) {
    return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Myorder />} />
          <Route exact path="/order" element={<Myorder />} />
          <Route exact path="/myproduct" element={<Myproduct />} />
        </Routes>
      </HashRouter>
    );
  }
} // app end here

export default App;
