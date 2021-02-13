import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

class LeadFirst extends Component {
    state = {
        item: [],
        loader: true
    };

    componentDidMount() {
        axios
            .get("/api/lead/" + this.props.skip + "/" + this.props.take)
            .then(res => {
                const item = res.data;
                this.setState({ item });
                this.setState({ loader: false });
            });
    }

    render() {
        if (!this.state.loader) {
            return (
                <>
                    {this.state.item.map((news, index) => (
                        <Link
                            key={index}
                            className="news-box"
                            to={"/news/" + news.slug}
                        >
                            <div className="row">
                                <div className="col-md-6 col-12 mt-4 mt-md-0">
                                    <h1>{news.title}</h1>
                                    <p>{news.content}</p>
                                    <small>
                                        <i className="fas fa-clock    " />{" "}
                                        {news.date}
                                    </small>
                                </div>
                                <div className="col-md-6 col-12">
                                    <img
                                        src={news.image}
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            );
        } else {
            return (
                    <div className="col-md-12 d-flex justify-content-center mt-5 mb-5">
                        <FadeLoader
                            color={"#6996C1"}
                            loading={this.state.loading}
                        />
                    </div>
            );
        }
    }
}

export default LeadFirst;
