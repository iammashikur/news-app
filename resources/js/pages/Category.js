import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Latest from "../components/Sections/Parts/Latest";

class Category extends Component {
    state = {
        item: []
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;
        axios.get(`/api/category_by_slug/${slug}`).then(res => {
            const item = res.data;
            this.setState({ item });
            console.log(item);
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 line-right line-left mt-4">
                            <div className="line-bottom mt-4 mb-4" />

                            <div className="line-bottom mt-4 mb-4" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="latest-popular">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link show active"
                                            data-toggle="tab"
                                            href="#tabs-1"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            সর্বশেষ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#tabs-2"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            সিলেটের সর্বশেষ
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        id="tabs-1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="bg-light"
                                            style={{
                                                maxHeight: "390px",
                                                overflowY: "scroll"
                                            }}
                                        >
                                            <Latest skip={0} take={20} />
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="tabs-2"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="bg-light"
                                            style={{
                                                maxHeight: "390px",
                                                overflowY: "scroll"
                                            }}
                                        >
                                            <Latest skip={0} take={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <div className="line-bottom mt-4 mb-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Category;
