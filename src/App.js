import React, { createContext, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/Home.js";
import axios from "axios";

export const ProContext = createContext(null);


function App() {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const getAllProducts = async () => {
    try {
      const result = await axios.get("http://localhost:9000/api/product");
      console.log("Response PRODUCTS ===> ", result.data.result);
      setProducts([...result.data.result]);
    } catch (error) {
      console.log("Aldaa axios awah ved: ", error);
    }
  };

  const getAllCategories = async () => {
    try {
      const result = await axios.get("http://localhost:9000/api/category");
      console.log("Response category ===> ", result.data.result);
      setCategories([...result.data.result]);
    } catch (error) {
      console.log("Aldaa category : ", error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          
          <ProContext.Provider value={[categories, products]}>
            <Home Toggle={Toggle} />
          </ProContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
