import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LeadOthers extends Component {


    state = {
        item: [],
        loader: true
    };

    componentDidMount() {
        axios.get("/api/lead/"+this.props.skip+"/"+this.props.take).then(res => {
            const item = res.data;
            this.setState({ item });
            this.setState({loader: false});
        });
    }

    render() {

        if (this.state.loader) return (
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
            );

        return (
            <>
                {this.state.item.map((news, index) => (
                    <Link
                        key={index}
                        className="news-box"
                        to={'/news/'+news.slug}
                    >




                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                                <small>
                                    <i className="fas fa-clock"/> {news.date}
                                </small>


                    </Link>
                ))}
            </>
        );
    }
}

export default LeadOthers;
