import React, { Component } from "react";
import News from "./Parts/News";

class SectionThirteen extends Component {
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
                                            ক্যাম্পাস{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={16}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={16}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={16}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={16}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            সংগঠন সংবাদ{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={17}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={17}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={17}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={17}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            ক্যারিয়ার{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={18}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={18}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={18}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={18}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <div className=" mt-4 mb-4">
                                        <h2 className="cat-title">
                                            লাইফ স্টাইল{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={19}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news-nodate"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={19}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={19}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                    <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                    <News
                                        category={19}
                                        skip={3}
                                        title={10}
                                        content={20}
                                        design={"news-bar"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionThirteen;
