import React, { Component } from "react";

import HeaderSection from "./HeaderSection";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionTen from "./SectionTen";
import SectionEleven from "./SectionEleven";
import SectionTwelve from "./SectionTwelve";
import SectionThirteen from "./SectionThirteen";

class CrazyComponent extends Component {
    state = {
        Check: true
    };

    render() {


        if (this.props.element == 1) {
            return (
                <>
                    <SectionOne />
                </>
            );
        }

        if (this.props.element == 2) {
            return (
                <>
                    <SectionTwo />
                </>
            );
        }

        if (this.props.element == 3) {
            return (
                <>
                    <SectionThree />
                </>
            );
        }

        if (this.props.element == 4) {
            return (
                <>
                    <SectionFour />
                </>
            );
        }

        if (this.props.element == 5) {
            return (
                <>
                    <SectionFive />
                </>
            );
        }

        if (this.props.element == 6) {
            return (
                <>
                    <SectionSix />
                </>
            );
        }

        if (this.props.element == 7) {
            return (
                <>
                    <SectionSeven />
                </>
            );
        }

        if (this.props.element == 8) {
            return (
                <>
                    <SectionEight />
                </>
            );
        }

        if (this.props.element == 9) {
            return (
                <>
                    <SectionNine />
                </>
            );
        }

        if (this.props.element == 10) {
            return (
                <>
                    <SectionTen />
                </>
            );
        }

        if (this.props.element == 11) {
            return (
                <>
                    <SectionEleven />
                </>
            );
        }


         if (this.props.element == 12) {
            return (
                <>
                    <SectionTwelve />
                </>
            );
        }


         if (this.props.element == 13) {
            return (
                <>
                    <SectionThirteen />
                </>
            );
        }

        else {
            return (
                <div className="container">
                    <div
                        style={this.props.style}
                        className="mt-4 mb-4"
                        data-aos="slide-right"
                    >
                        <div className="d-flex align-items-center justify-content-center bd-highlight mb-3 h-100">
                            <h1 className="p-2 bd-highlight">
                                {" "}
                                <i className="fas fa-sad-tear "></i> Error 404 !{" "}
                            </h1>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CrazyComponent;
