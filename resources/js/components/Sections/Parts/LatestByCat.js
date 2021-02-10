import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LatestByCat extends Component {


    state = {
        item: []
    };

    componentDidMount() {
        axios.get("/api/news/"+this.props.cat+"/"+this.props.skip+"/"+this.props.take).then(res => {
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
                        to={'/news/'+news.slug}
                    >


                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> {news.title}</h2>
                      </div>
                    </div>


                    </Link>
                ))}
            </>
        );
    }
}

export default LatestByCat;
