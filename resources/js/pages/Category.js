import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Latest from "../components/Sections/Parts/Latest";




class Category extends Component {


    state = {
        item: [],
        data: [],
        cnam: []
    };

    componentDidUpdate(prevProps) {

        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;

        axios.get(`/api/category_name_by_slug/${slug}`).then(response => {
            const cnam = response.data;
            this.setState({ cnam });
        });

        axios.get(`/api/category_by_slug/${slug}`).then(response => {
            const item = response.data;
            this.setState({ item });
        });
        }



    }

    componentDidMount() {

        window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;

        axios.get(`/api/category_name_by_slug/${slug}`).then(response => {
            const cnam = response.data;
            this.setState({ cnam });
        });

        axios.get(`/api/category_by_slug/${slug}`).then(response => {
            const item = response.data;
            this.setState({ item });
        });

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">{this.state.cnam.name} <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                </div>



                                {/* {this.state.item.map((news, idx) => (
                                    <div className="col-md-4" key={idx}>
                                        <Link
                                            className="news-box mb-4"
                                            to={'/news/'+news.slug}
                                        >
                                            <img
                                                className="mb-4"
                                                src={news.image}
                                            />
                                            <h1>
                                                {news.title}
                                            </h1>
                                            <p>
                                                {news.content}
                                            </p>
                                            <small>
                                                <i className="fas fa-clock    " />
                                                2 January 2021, 9:46 PM
                                            </small>
                                        </Link>
                                    </div>
                                ))} */}
                            </div>
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
