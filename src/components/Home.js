import Navigation from "./Navigation.js";

function Home({Toggle}) {

  return (
    <div className="px-3">
      <Navigation Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <di className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
              <div>
                <h3 className="fs-2 text-primary">230</h3>
                <p className="fs-5 text-primary">Бүтээгдэхүүн</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1 text-warning"></i>
            </di>
          </div>

          <div className="col-md-3">
            <di className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
              <div>
                <h3 className="fs-2 text-primary">2450</h3>
                <p className="fs-5 text-primary">Орлого</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1 text-warning"></i>
            </di>
          </div>
          <div className="col-md-3">
            <di className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
              <div>
                <h3 className="fs-2 text-primary">28</h3>
                <p className="fs-5 text-primary">Хүргэлт</p>
              </div>
              <i className="bi bi-truck p-3 fs-1 text-warning"></i>
            </di>
          </div>
          <div className="col-md-3">
            <di className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
              <div>
                <h3 className="fs-2 text-primary">20%</h3>
                <p className="fs-5 text-primary">Хэрэглэгч</p>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1 text-warning"></i>
            </di>
          </div>
        </div>
      </div>

      <table class="table caption-top bg-white rounded mt-2">
        <caption className="text-secondary fs-4">Recent orders</caption>
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
    </div>
  );
}

export default Home;
