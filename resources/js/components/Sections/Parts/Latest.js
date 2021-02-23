import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

class Latest extends Component {


    state = {
        item: [],
        loader: true
    };

    componentDidMount() {
        axios.get("/api/latest/"+this.props.skip+"/"+this.props.take).then(res => {
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
                        to={'/news/'+news.slug}
                    >


                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-1 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> {news.title}</h2>
                      </div>
                    </div>


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

export default Latest;
