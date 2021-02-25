import React, { Component } from "react";
import News from "./Parts/News";

class SectionThree extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">
                                        {" "}
                                        জাতীয়{" "}
                                        <i className="far fa-arrow-alt-circle-right" />
                                    </h2>
                                </div>

                                <News
                                    category={2}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                                <News
                                    category={2}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={2}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={2}
                                    skip={3}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={2}
                                    skip={4}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                            </div>
                            <div className="col-md-6 line-left line-right">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">
                                        {" "}
                                        সিলেট প্রতিক্ষণ{" "}
                                        <i className="far fa-arrow-alt-circle-right" />
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <News
                                            category={1}
                                            skip={0}
                                            title={10}
                                            content={20}
                                            design={"big-news"}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <News
                                            category={1}
                                            skip={1}
                                            title={10}
                                            content={20}
                                            design={"big-news"}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <News
                                            category={1}
                                            skip={2}
                                            title={10}
                                            content={20}
                                            design={"big-news"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">
                                        {" "}
                                        দেশজুড়ে{" "}
                                        <i className="far fa-arrow-alt-circle-right" />
                                    </h2>
                                </div>
                                <News
                                    category={3}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                                <News
                                    category={3}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={3}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={3}
                                    skip={3}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
                                />
                                <News
                                    category={1}
                                    skip={4}
                                    title={10}
                                    content={20}
                                    design={"news-bar"}
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

export default SectionThree;
