import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

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

        if (!this.state.loader) {

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

export default LeadOthers;
