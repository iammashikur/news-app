import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

class News extends Component {
    state = {
        item: [],
        loader: true
    };

    async componentDidMount() {
        await axios
            .get(
                "/api/item/" +
                    this.props.category +
                    "/" +
                    this.props.skip +
                    "/" +
                    this.props.title +
                    "/" +
                    this.props.content
            )
            .then(res => {
                const item = res.data;
                this.setState({ item });
                this.setState({ loader : false });
            });
    }

    render() {

        if (!this.state.loader) {
        if (this.props.design == "big-news") {
            return (
                <>
                    {this.state.item.map((news, index) => (
                        <div className="mb-4" key={index}>
                            <Link
                                key={index}
                                className="news-box"
                                to={"/news/" + news.slug}
                            >
                                <img
                                    className="mb-4"
                                    src={news.image}
                                    width="100%"
                                />
                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                                <small>
                                    <i className="fas fa-clock    " />{" "}
                                    {news.date}
                                </small>
                            </Link>
                        </div>
                    ))}
                </>
            );
        }

        if (this.props.design == "news-bar") {
            return (
                <>
                    {this.state.item.map((news, index) => (
                        <div className="mb-4" key={index}>
                            <Link
                                key={index}
                                className="news-bar"
                                to={"/news/" + news.slug}

                            >
                                <div className="row">
                                    <div className="col-4 col-md-6 pr-2">
                                        <img src={news.image} width="100%" />
                                    </div>
                                    <div className="col-8 col-md-6 pl-2">
                                        <h1>{news.title}</h1>
                                        <small>
                                            <i className="fas fa-clock    "></i>{" "}
                                            {news.date}
                                        </small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </>
            );
        }

        if (this.props.design == "news-bar-big") {
            return (
                <>
                    {this.state.item.map((news, index) => (
                        <Link className="news-bar big"  to={"/news/" + news.slug} key={index}>
                            <div className="row">
                                <div className="col-4 col-md-4 pr-2">
                                <img src={news.image} width="100%" />

                                </div>
                                <div className="col-8 col-md-8 pl-2">
                                          <h1>
                                          {news.title}
                                        </h1>
                                        <p className="d-none d-md-block">
                                        {news.content}
                                        </p>


                                    <small>
                                        <i className="fas fa-clock    "></i>
                                        {' '}{news.date}
                                    </small>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            );
        } else {
            return (
                <div>
                    <center>
                        <h3>Sorry No Style Found !</h3>
                    </center>
                </div>
            );
        }

    } else {
        return (

                <div className="col-md-12 d-flex justify-content-center  mt-5 mb-5">
                    <ClipLoader
                        color={"#6996C1"}
                        loading={this.state.loading}
                    />
                </div>

        );
    }
    }
}

export default News;
