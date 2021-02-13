import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    state = {
        item: []
    };

    componentDidMount() {
        axios.get("/menu").then(res => {
            const item = res.data;
            this.setState({ item });
        });
    }

    render() {
        return (


            <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={'/logo.png'} style={{width : '220px'}}/>
                    </a>

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
                        <ul className="navbar-nav mr-auto">
                            {this.state.item.map((category, idx) => (
                                <li className="nav-item" key={idx}>
                                    <a
                                        className="nav-link"
                                        href={"/category/" + category.slug}
                                    >
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            ></input>
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
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
