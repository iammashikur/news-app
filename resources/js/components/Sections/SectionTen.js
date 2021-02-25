import React, { Component } from "react";
import News from "./Parts/News";

class SectionTen extends Component {
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


            </>
        );
    }
}

export default SectionTen;
