import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={
                                    JSON.parse(localStorage.getItem("Settings"))
                                        .logo
                                }
                                style={{ width: "220px" }}
                            />
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarColor03"
                            aria-controls="navbarColor03"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarColor03"
                        >
                            <ul className="navbar-nav mr-auto pl-lg-5">
                                <li className="nav-menu dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        বাংলাদেশ
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownId"
                                    >
                                        {JSON.parse(
                                            localStorage.getItem("PreMenu")
                                        ).map((menu, idx) => (
                                            <Link
                                                className="dropdown-item"
                                                to={"/category/" + menu.slug}
                                                key={idx}
                                            >
                                                {menu.name}
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                {JSON.parse(
                                    localStorage.getItem("MainMenu")
                                ).map((category, idx) => (
                                    <li className="nav-menu" key={idx}>
                                        <Link
                                            className="nav-link"
                                            to={"/category/" + category.slug}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}

                                <li className="nav-menu dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        অন্যান্য
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownId"
                                    >
                                        {JSON.parse(
                                            localStorage.getItem("PostMenu")
                                        ).map((category, idx) => (
                                            <Link
                                                className="dropdown-item"
                                                to={
                                                    "/category/" + category.slug
                                                }
                                                key={idx}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                            </ul>

                            <form
                                className="form-inline my-2 my-lg-0"
                                action="/search"
                            >
                                <input
                                    name="search"
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="অনুসন্ধান করুন"
                                ></input>
                                <button
                                    className="btn btn-outline-success search my-2 my-sm-0"
                                    type="submit"
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
