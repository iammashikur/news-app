import React, { Component } from "react";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Latest from "../components/Sections/Parts/Latest";



function Alert(props) {
    const show = props.show;
    if (show) {
        return (
            <div className="alert border" role="alert">
                <h4 className="alert-heading text-dark">
                    <i className="fas fa-sad-tear" /> দুঃখিত !
                </h4>
                <hr />
                <p className="text-dark">কোনও সংবাদ পাওয়া যায়নি! !</p>
            </div>
        );
    }
    return false;
}

export default class CategoryItem extends Component {


    state = {
        news: [],
        next_page: `/api/category_by_slug/${this.props.slug}`,
        cnam: [],
        nodata: false,
        preloader : true
    };

    componentDidMount() {



        console.log(this.props.slug);


        this.fxRR();

    }

    componentDidUpdate(prevProps, props) {
        // if (this.props.location !== prevProps.location) {

        //     console.log();


        // }

        console.log(this.props.slug);
    }



    fxRR() {

        console.log(this.state.next_page);

 window.scrollTo(0, 0);
        const slug = this.props.slug;

        axios.get(`/api/category_name_by_slug/${slug}`).then(response => {
            const cnam = response.data;
            this.setState({ cnam });
            this.setState({
                preloader: false
            });
        });

        this.setState({
            loading: true
        });

        this.getCategoryItem();
    }

    getCategoryItem() {
        if (!this.state.loading) {
            this.setState({
                loading: true
            });
            this.registerScrollEvent();
            axios.get(this.state.next_page).then(response => {
                const paginator = response.data,
                    news = paginator.data;

                if (news.length) {
                    this.setState({
                        news: [...this.state.news, ...news],
                        next_page: paginator.next_page_url,
                        loading: false
                    });
                }

                if (!paginator.next_page_url) {
                    this.removeScrollEvent();
                }

                if (news.length == 0) {
                    this.setState({
                        loading: false,
                        nodata: true
                    });
                }
            });
        }
    }

    registerScrollEvent() {
        $(window).on(
            "scroll",
            function() {
                if (
                    $(window).scrollTop() + $(window).height() ===
                    $(document).height()
                ) {
                    this.getCategoryItem();
                }
            }.bind(this)
        );
    }

    removeScrollEvent() {
        $(window).off("scroll");
    }

    render() {

        if (!this.state.preloader) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">
                                        {this.state.cnam.name}{" "}
                                        <i className="far fa-arrow-alt-circle-right" />
                                    </h2>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <Alert show={this.state.nodata} />
                            </div>

                            {this.state.news.map((news, idx) => {
                                return (
                                    <div className="col-md-4 mt-4" key={idx}>
                                        <Link
                                            className="news-box mb-4"
                                            to={"/news/" + news.slug}
                                        >
                                            <img
                                                className="mb-4"
                                                src={news.image}
                                            />
                                            <h1>{news.title}</h1>
                                            <p>{news.content}</p>
                                            <small>
                                                <i className="fas fa-clock   " />
                                                2 January 2021, 9:46 PM
                                            </small>
                                        </Link>
                                    </div>
                                );
                            })}

                            <div className="col-12">
                                <center>
                                    <div
                                        className="col-md-12 d-flex justify-content-center">
                                        <FadeLoader
                                            color={"#6996C1"}
                                            loading={this.state.loading}
                                        />
                                    </div>
                                </center>
                            </div>
                        </div>
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
                                            maxHeight: "390px",
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
                                            maxHeight: "390px",
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
        );

        }

        else{
            return (
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 d-flex justify-content-center"
                            style={{ marginTop: "30vh" }}
                        >
                            <FadeLoader color={"#6996C1"} loading={this.state.loading} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}
