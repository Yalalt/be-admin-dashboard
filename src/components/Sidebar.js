import React  from "react";
import "../styles/sidebar.css";

function Sidebar() {
    return (
        <div className="bg-white sidebar p-2">
            <div className="my-2">
                <i className="bi bi-telegram me-3 fs-4 ps-4 text-primary"></i>
                <span className="brand-name fs-4 text-primary">Electron</span>
            </div>
            <hr className="text-dark" />
            <div className="list-group list-group-flush">
                <a className="list-group-item py-2">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span>Хяналт</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-table fs-5 me-3"></i>
                    <span>Бүтээгдэхүүн</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-clipboard-data fs-5 me-3"></i>
                    <span>Захиалга</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-people fs-5 me-3"></i>
                    <span>Хэрэглэгч</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-person-fill-check fs-5 me-3"></i>
                    <span>Модератор</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-gear fs-5 me-3"></i>
                    <span>Тохиргоо</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-power fs-5 me-3"></i>
                    <span>Гарах</span>
                </a>
            </div>

        </div>
    );
}

export default Sidebar;