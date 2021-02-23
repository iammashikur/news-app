import React, { Component } from "react";
import News from "./Parts/News";

class MainSections extends Component {



    render() {
        return (
            <div className="container">
                <div className="row" style={{ height: "auto !important" }}>
                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                রাজনীতি{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 line-right">
                                <News
                                    category={4}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>

                            <div className="col-md-3 line-right">
                                <News
                                    category={4}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>

                            <div className="col-md-3 line-right">
                                <News
                                    category={4}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>

                            <div className="col-md-3">
                                <News
                                    category={4}
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
                                    content={20}
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
                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                {" "}
                                এক্সক্লুসিভ{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 line-right">
                                <News
                                    category={8}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={8}
                                    skip={1}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                            </div>
                            <div className="col-md-4  line-right">
                                <News
                                    category={8}
                                    skip={2}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={8}
                                    skip={3}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={8}
                                    skip={4}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={8}
                                    skip={5}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"></div>
                    </div>
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
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={1}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={2}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={3}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                            </div>
                            <div className="col-md-4  line-right">
                                <News
                                    category={14}
                                    skip={4}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>
                            <div className="col-md-4">
                                <News
                                    category={14}
                                    skip={5}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={6}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={7}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={14}
                                    skip={8}
                                    title={10}
                                    content={10}
                                    design={"news-bar-big"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"></div>
                    </div>
                    <div className="col-md-12">
                        <div className=" mt-4 mb-4">
                            <h2 className="cat-title">
                                মতামত{" "}
                                <i className="far fa-arrow-alt-circle-right" />
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 line-right">
                                <News
                                    category={9}
                                    skip={0}
                                    title={10}
                                    content={20}
                                    design={"big-news"}
                                />
                            </div>
                            <div className="col-md-6">
                                <News
                                    category={9}
                                    skip={1}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={9}
                                    skip={2}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
                                <News
                                    category={9}
                                    skip={3}
                                    title={10}
                                    content={20}
                                    design={"news-bar-big"}
                                />
                                <div className=" line-bottom mt-0 mt-md-4 mb-4" />
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

export default MainSections;
