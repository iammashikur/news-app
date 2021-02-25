import React, { Component } from "react";
import News from "./Parts/News";

class SectionTwelve extends Component {

    render() {
        return (
            <>


                <div className="container">
                    <div className="row">


                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            অর্থ ও বাণিজ্য{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={12}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={12}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={12}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={12}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            আইন-আদালত{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={13}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={13}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={13}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={13}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            {" "}
                                            গণমাধ্যম{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={11}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={11}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={11}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={11}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            ফিচার{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={15}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={15}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={15}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={15}
                                        skip={3}
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
            </>
        );
    }
}

export default SectionTwelve;
