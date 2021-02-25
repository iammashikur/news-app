import React, { Component } from "react";
import News from "./Parts/News";

class SectionFour extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>

                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                আন্তর্জাতিক{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 line-right">
                                <News
                                    category={5}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>
                            <div className="col-md-3 line-right">
                                <News
                                    category={5}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>
                            <div className="col-md-3 line-right">
                                <News
                                    category={5}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>
                            <div className="col-md-3">
                                <News
                                    category={5}
                                    skip={3}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
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

export default SectionFour;
