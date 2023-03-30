import { useContext } from "react";
import { ProContext } from "../App";

const Products = () => {
  const prodContext = useContext(ProContext);
  console.clear();
  console.log("Product context >> ", prodContext);

  return (
    <table className="table caption-top bg-white rounded mt-2">
      <caption className="text-secondary fs-4">Recent products</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Brand</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {prodContext[1].map((el, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.stock}</td>
              <td>{el.brand}</td>
              <td>{el.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Products;
