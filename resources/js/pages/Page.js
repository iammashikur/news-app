import React, { Component } from "react";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }
    render() {

        if(this.props.match.params.slug == 'about-us'){

            return (
                <>
                    <div className="container mt-4 mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">

                                    About Us <i className="far fa-arrow-alt-circle-right"></i>
                                    </h2>
                                </div>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.parse(
                                            localStorage.getItem("Settings")
                                        ).about
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </>
            );

        }


        if(this.props.match.params.slug == 'contact-us')

        {

            return (
                <>
                    <div className="container mt-4 mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">

                                        Contact Us <i className="far fa-arrow-alt-circle-right"></i>
                                    </h2>
                                </div>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.parse(
                                            localStorage.getItem("Settings")
                                        ).contact
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </>
            );

        }


        if(this.props.match.params.slug == 'privacy-policy')
        {
            return (
                <>
                    <div className="container mt-4 mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className=" mt-4 mb-4">
                                    <h2 className="cat-title">

                                        Privacy Policy<i className="far fa-arrow-alt-circle-right"></i>
                                    </h2>
                                </div>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.parse(
                                            localStorage.getItem("Settings")
                                        ).privacy
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        else{

            <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-12">
                    <div className=" mt-4 mb-4">
                        <h2 className="cat-title">
                            {this.props.match.params.slug}
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </h2>
                    </div>

                   <center> <h1>404 Page Not Found...</h1> </center>
                </div>
            </div>
        </div>

        }

    }
}

export default Page;
