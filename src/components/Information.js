function Information({ Toggle }) {
  return (
    <div>
      <div className="row g-3 my-2">
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
            <div>
              <h3 className="fs-2 text-primary">230</h3>
              <p className="fs-5 text-primary">Бүтээгдэхүүн</p>
            </div>
            <i className="bi bi-cart-plus p-3 fs-1 text-warning"></i>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
            <div>
              <h3 className="fs-2 text-primary">2450</h3>
              <p className="fs-5 text-primary">Орлого</p>
            </div>
            <i className="bi bi-currency-dollar p-3 fs-1 text-warning"></i>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
            <div>
              <h3 className="fs-2 text-primary">28</h3>
              <p className="fs-5 text-primary">Хүргэлт</p>
            </div>
            <i className="bi bi-truck p-3 fs-1 text-warning"></i>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-center rounded">
            <div>
              <h3 className="fs-2 text-primary">20%</h3>
              <p className="fs-5 text-primary">Хэрэглэгч</p>
            </div>
            <i className="bi bi-graph-up-arrow p-3 fs-1 text-warning"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Information;
