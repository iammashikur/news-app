import React, { Component } from "react";
import News from "./Parts/News";

class SectionFive extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>

                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                বিনোদন{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-8 line-right">
                                        <News
                                            category={7}
                                            skip={0}
                                            title={10}
                                            content={55}
                                            design={"big-news"}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <News
                                            category={7}
                                            skip={1}
                                            title={10}
                                            content={20}
                                            design={"big-news-nocntent"}
                                        />
                                        <News
                                            category={7}
                                            skip={2}
                                            title={10}
                                            content={20}
                                            design={"big-news-nocntent"}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="line-bottom mt-4 mb-4"></div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <News
                                                    category={7}
                                                    skip={3}
                                                    title={10}
                                                    content={20}
                                                    design={"big-news"}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <News
                                                    category={7}
                                                    skip={4}
                                                    title={10}
                                                    content={20}
                                                    design={"big-news"}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <News
                                                    category={7}
                                                    skip={5}
                                                    title={10}
                                                    content={20}
                                                    design={"big-news"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="news-box h-20" dangerouslySetInnerHTML={{ __html: JSON.parse(localStorage.getItem('Settings')).wetget }}>

                                </div>
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

export default SectionFive;
