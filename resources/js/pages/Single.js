import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Latest from "../components/Sections/Parts/Latest";
import { FadeLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import News from "../components/Sections/Parts/News";

class Single extends Component {

    state = {
        item: [],
        loading: true
    };

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            const slug = this.props.match.params.slug;
            axios.get(`/api/news_by_slug/${slug}`).then(res => {
                const item = res.data;

                this.setState({ item });
            });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const slug = this.props.match.params.slug;
        axios.get(`/api/news_by_slug/${slug}`).then(res => {
            const item = res.data;

            this.setState({ item });
            this.setState({ loading: false });
        });
    }

    render() {
        if (!this.state.loading) {
            return (
                <>
                    <Helmet>
                        <title>{this.state.item.title}</title>
                        <meta name="keywords" ontent={this.state.item.tags} />
                        <meta
                            name="description"
                            content={this.state.item.description}
                        />
                        <meta property="og:type" content="article" />
                        <meta
                            property="og:image"
                            content={this.state.item.image}
                        />
                        <meta
                            property="og:title"
                            content={this.state.item.title}
                        />
                        <meta
                            property="og:description"
                            content={this.state.item.description}
                        />
                    </Helmet>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 mb-4 mt-4">
                                <div
                                    style={{
                                        background: "#e4e4e4",
                                        padding: "5px",
                                        borderTopRightRadius: "10px",
                                        borderTopLeftRadius: "10px"
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "red",
                                            textAlign: "center",
                                            fontSize: "12px",
                                            margin: "0px"
                                        }}
                                    >
                                        <Link
                                            to={
                                                "/category/" +
                                                this.state.item.category_slug
                                            }
                                        >
                                            {this.state.item.category}
                                        </Link>
                                    </p>
                                </div>
                                <br />
                                <center>
                                    <img
                                        id="mobile"
                                        src="/source.png"
                                        className="rounded-circle"
                                        alt=""
                                        width="80px"
                                        height="80px"
                                    />
                                </center>
                                <br />
                                <div
                                    style={{
                                        background: "#e5e6f1",
                                        padding: "10px 5px 10px 5px",
                                        borderTopRightRadius: "10px",
                                        borderTopLeftRadius: "10px"
                                    }}
                                >
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontSize: "17px",
                                            color: "#1f1f1f",
                                            textAlign: "center"
                                        }}
                                    >
                                        {this.state.item.source}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        background: "#444",
                                        padding: "5px",
                                        borderBottomRightRadius: "10px",
                                        borderBottomLeftRadius: "10px"
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: "13px",
                                            margin: "0px"
                                        }}
                                    >
                                        {this.state.item.date}
                                    </p>
                                </div>
                                <br />
                                <div
                                    className="d-none d-md-block"
                                    style={{ height: "auto !important" }}
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.parse(
                                            localStorage.getItem("Settings")
                                        ).sidebar_ad
                                    }}
                                ></div>
                            </div>
                            <div className="col-md-7 line-right line-left mt-4">
                                <div
                                    style={{
                                        fontSize: "16px",
                                        height: "auto !important"
                                    }}
                                    className="news-box single-page"
                                >
                                    <div>
                                        <img
                                            src={this.state.item.image}
                                            className="mb-4"
                                            width="100%"
                                        />

                                        <h1>{this.state.item.title}</h1>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: JSON.parse(
                                                    localStorage.getItem(
                                                        "Settings"
                                                    )
                                                ).post_ad
                                            }}
                                        ></div>

                                        <div
                                            style={{
                                                height: "auto !important"
                                            }}
                                        >
                                            <div className="mt-4 mb-4 d-flex">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: JSON.parse(
                                                            localStorage.getItem(
                                                                "Settings"
                                                            )
                                                        ).share_button
                                                    }}
                                                ></div>{" "}
                                                <div className="btn btn-sm btn-default p-2 ml-2">
                                                    {" "}
                                                    <i className="fas fa-share    "></i>{" "}
                                                    {(
                                                        this.state.item.views /
                                                        2
                                                    ).toFixed()}{" "}
                                                    Shares
                                                </div>{" "}
                                            </div>

                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: this.state.item.content
                                                }}
                                            ></div>
                                        </div>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: JSON.parse(
                                                    localStorage.getItem(
                                                        "Settings"
                                                    )
                                                ).post_ad
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="line-bottom mt-4 mb-4" />

                                <div className="mt-4 mb-4">
                                    <h2 className="cat-title">
                                        এই ক্যাটাগরীর আরো খবর{" "}
                                        <i className="far fa-arrow-alt-circle-right"></i>
                                    </h2>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={1}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={2}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={3}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={4}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={5}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <News
                                            category={
                                                this.state.item.category_id
                                            }
                                            skip={6}
                                            title={10}
                                            content={10}
                                            design={"big-news"}
                                        />
                                    </div>
                                </div>

                                <div className="line-bottom mt-4 mb-4" />
                            </div>
                            <div className="col-md-3 mt-4">
                                <div className="latest-popular">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link show active"
                                                data-toggle="tab"
                                                href="#tabs-1"
                                                role="tab"
                                                aria-selected="true"
                                            >
                                                সর্বশেষ
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                data-toggle="tab"
                                                href="#tabs-2"
                                                role="tab"
                                                aria-selected="false"
                                            >
                                                সিলেটের সর্বশেষ
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div
                                            className="tab-pane show active"
                                            id="tabs-1"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="bg-light"
                                                style={{
                                                    maxHeight: "636px",
                                                    overflowY: "scroll"
                                                }}
                                            >
                                                <Latest skip={0} take={20} />
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="tabs-2"
                                            role="tabpanel"
                                        >
                                            <div
                                                className="bg-light"
                                                style={{
                                                    maxHeight: "636px",
                                                    overflowY: "scroll"
                                                }}
                                            >
                                                <Latest skip={0} take={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="col-md-12">
                                    <div className="line-bottom mt-4 mb-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 d-flex justify-content-center"
                            style={{ marginTop: "30vh" }}
                        >
                            <FadeLoader
                                color={"#6996C1"}
                                loading={this.state.loading}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Single;
