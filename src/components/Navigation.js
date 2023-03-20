import React from "react";
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

function Navigation({Toggle}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-transparent">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ><i className="bi bi-justify"></i></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <form className="d-flex my-2 mx-auto my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Хайх"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            Хайх
          </button>
        </form>
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Хэрэглэгч
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Хэрэглэгч
              </a>
              <a className="dropdown-item" href="#">
                Тохиргоо
              </a>
              <a className="dropdown-item" href="#">
                Гарах
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
