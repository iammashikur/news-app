import React, { Component } from "react";
import News from "./Parts/News";

class MediaSection extends Component {
    render() {
        return (
            <>
                <div className="section-video mt-4 mb-4">
                    <div className="container pt-4 pb-4">
                        <div>
                            <div
                                id="carousel1"
                                className="carousel slide media-box"
                                data-ride="carousel"
                            >
                                <div
                                    style={{
                                        color: "#FFC107",
                                        fontSize: "20px",
                                        marginBottom: "20px"
                                    }}
                                >
                                    <i
                                        style={{
                                            color: "#ff3e00",
                                            fontSize: "26px"
                                        }}
                                        className="fa fa-play-circle"
                                        aria-hidden="true"
                                    />{" "}
                                    &nbsp;ভিডিও
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {JSON.parse(
                                                localStorage.getItem("VideoOne")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                        <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe
                                                                className="embed-responsive-item"
                                                                src={
                                                                    keyName.link
                                                                }
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                        {JSON.parse(
                                                localStorage.getItem("VideoTwo")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                        <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe
                                                                className="embed-responsive-item"
                                                                src={
                                                                    keyName.link
                                                                }
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                        {JSON.parse(
                                                localStorage.getItem("VideoThree")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                        <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe
                                                                className="embed-responsive-item"
                                                                src={
                                                                    keyName.link
                                                                }
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carousel1"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carousel1"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div
                                id="carousel2"
                                className="carousel slide media-box"
                                data-ride="carousel"
                            >
                                <div
                                    style={{
                                        color: "#FFC107",
                                        fontSize: "20px",
                                        marginBottom: "20px"
                                    }}
                                >
                                    <i
                                        style={{
                                            color: "#ff3e00",
                                            fontSize: "20px"
                                        }}
                                        className="fa fa-camera-retro"
                                        aria-hidden="true"
                                    />{" "}
                                    &nbsp;ছবি
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {JSON.parse(
                                                localStorage.getItem("PhotoOne")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                       <img src={keyName.image} className="w-100" />
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.caption}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                        {JSON.parse(
                                                localStorage.getItem("PhotoTwo")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                       <img src={keyName.image} className="w-100"/>
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.caption}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                        {JSON.parse(
                                                localStorage.getItem("PhotoThree")
                                            ).map((keyName, i) => (
                                                <div
                                                    className="col-md-3 col-6"
                                                    key={i}
                                                >
                                                    <div className="box mb-4 mb-md-0">
                                                       <img src={keyName.image} className="w-100" />
                                                        <div
                                                            style={{
                                                                padding: "5px",
                                                                background:
                                                                    "#111"
                                                            }}
                                                        >
                                                            <p
                                                                style={{
                                                                    color:
                                                                        "#fff",
                                                                    fontWeight: 700,
                                                                    marginBottom:
                                                                        "0px"
                                                                }}
                                                            >
                                                                {keyName.caption}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carousel2"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carousel2"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="line-bottom mt-4 mb-4"></div>
                        </div>
                        <div className="col-md-12">
                            <div className=" mt-4 mb-4">
                                <h2 className="cat-title">
                                    {" "}
                                    শিল্প ও সাহিত্য{" "}
                                    <i className="far fa-arrow-alt-circle-right" />
                                </h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-3 line-right">
                                    <News
                                        category={10}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news"}
                                    />
                                </div>
                                <div className="col-md-3 line-right">
                                    <News
                                        category={10}
                                        skip={1}
                                        title={10}
                                        content={20}
                                        design={"big-news"}
                                    />
                                </div>
                                <div className="col-md-3 line-right">
                                    <News
                                        category={10}
                                        skip={2}
                                        title={10}
                                        content={20}
                                        design={"big-news"}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <News
                                        category={10}
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
                                            অর্থ ও বাণিজ্য{" "}
                                            <i className="far fa-arrow-alt-circle-right" />
                                        </h2>
                                    </div>
                                    <News
                                        category={12}
                                        skip={0}
                                        title={10}
                                        content={20}
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                                        design={"big-news"}
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
                        <div className="col-md-12">
                            <div className="line-bottom mt-4 mb-4"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MediaSection;
