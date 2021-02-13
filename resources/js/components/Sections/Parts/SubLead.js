import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SubLeads extends Component {
    state = {
        item: [],
        loader: true
    };

    componentDidMount() {
        axios
            .get("/api/news/1/" + this.props.skip + "/" + this.props.take)
            .then(res => {
                const item = res.data;
                this.setState({ item });
                this.setState({loader: false});
            });
    }

    render() {

        if (this.state.loader) return (
           <div className="col">
                <center>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
        </center>
           </div>
            );

        return (
            <>
                {this.state.item.map((news, index) => (
                    <div className="col-md-4" key={index}>
                        <Link className="news-bar" to={"/news/" + news.slug}>
                            <div className="row">
                                <div className="col-4 col-md-6 pr-2">
                                    <img
                                        src={news.image}
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <div className="col-8 col-md-6 pl-2">
                                    <h1>{news.title}</h1>
                                    <small>
                                        <i className="fas fa-clock"></i> {news.date}
                                    </small>
                                </div>
                            </div>
                        </Link>
                        <div className=" line-bottom mt-0 mt-md-4" />
                    </div>
                ))}
            </>
        );
    }
}

export default SubLeads;
