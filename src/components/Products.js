const Products = () => {
    return (
        <table class="table caption-top bg-white rounded mt-2">
        <caption className="text-secondary fs-4">Recent products</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customers</th>
            <th scope="col">Order ID</th>
            <th scope="col">Phone number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
}

export default Products;