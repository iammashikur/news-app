import React, { Component } from "react";
import News from "./Parts/News";

class SectionTen extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>


                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                খেলাধুলা{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>


                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 line-right">
                                <News
                                    category={6}
                                    skip={0}
                                    title={10}
                                    content={50}
                                    design={"big-news"}
                                />{" "}
                            </div>
                            <div className="col-md-5">
                                <News
                                    category={6}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={6}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={6}
                                    skip={3}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                            </div>
                            <div className="col-md-3">
                                <News
                                    category={6}
                                    skip={4}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-5" />
                                <News
                                    category={6}
                                    skip={5}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={6}
                                    skip={6}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={6}
                                    skip={7}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"> </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SectionTen;
