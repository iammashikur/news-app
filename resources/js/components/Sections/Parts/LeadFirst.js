import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LeadFirst extends Component {


    state = {
        item: []
    };

    componentDidMount() {
        axios.get("/api/news/1/"+this.props.skip+"/"+this.props.take).then(res => {
            const item = res.data;
            this.setState({ item });
        });
    }

    render() {
        return (
            <>
                {this.state.item.map((news, index) => (
                    <Link
                        key={index}
                        className="news-box"
                        to={'/news/'+news.slug}
                    >
                        <div className="row">
                            <div className="col-md-6 col-12 mt-4 mt-md-0">
                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                                <small>
                                    <i className="fas fa-clock    " />{news.date}</small>
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
    }
}

export default LeadFirst;
