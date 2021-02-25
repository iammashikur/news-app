import React, { Component } from "react";
import News from "./Parts/News";

class SectionEight extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>

                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                প্রবাস দর্পণ{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 line-right">
                                <News
                                    category={14}
                                    skip={0}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={1}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={2}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={3}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                            </div>
                            <div className="col-md-4  line-right">
                                <News
                                    category={14}
                                    skip={4}
                                    title={10}
                                    content={35}
                                    design={"big-news-nodate"}
                                />
                            </div>
                            <div className="col-md-4">
                                <News
                                    category={14}
                                    skip={5}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={6}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={7}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={8}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big-nocontent"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionEight;
