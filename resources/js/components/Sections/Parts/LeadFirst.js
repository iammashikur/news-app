import React, { Component } from "react";
import axios from "axios";

class LeadFirst extends Component {
    state = {
        item: []
    };

    componentDidMount() {
        axios.get("/api/news/1/0/1").then(res => {
            const item = res.data;
            this.setState({ item });
        });
    }

    render() {
        return (
            <>
                {this.state.item.map((news, index) => (
                    <a
                        key={index}
                        className="news-box"
                        href="https://deshdorpon.com/%e0%a6%ae%e0%a6%be%e0%a6%87%e0%a6%9c%e0%a6%97%e0%a6%be%e0%a6%81%e0%a6%93%e0%a7%9f%e0%a7%87-%e0%a6%9f%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%a8%e0%a7%87%e0%a6%b0-%e0%a6%ac%e0%a6%97%e0%a6%bf-%e0%a6%b2/"
                    >
                        <div className="row">
                            <div className="col-md-6 col-12 mt-4 mt-md-0">
                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                                <small>
                                    <i className="fas fa-clock    " /> 5
                                    February 2021, 5:02 AM
                                </small>
                            </div>
                            <div className="col-md-6 col-12">
                                <img
                                    src="https://deshdorpon.com/media/2021/02/train_maijghow_deshdorpon.jpg"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </a>
                ))}
            </>
        );
    }
}

export default LeadFirst;
