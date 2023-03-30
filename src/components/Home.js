import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation.js";
import Products from "./Products.js";
import AddProduct from "./AddProduct.js";
import Information from "./Information.js";
import User from "./User.js";
import AddUser from "./AddUser.js";
import { useContext } from "react";

function Home({ Toggle }) {

  return (
    <div className="px-3">
      <Navigation Toggle={Toggle} />
      <div className="container-fluid">
        <Routes>
          <Route index path="/" element={<Information />} />
          <Route path="/product" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/user" element={<User />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
