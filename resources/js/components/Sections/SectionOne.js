import React, { Component } from "react";
import { PuffLoader } from "react-spinners";
import LeadFirst from "./Parts/LeadFirst";
import LeadOthers from "./Parts/LeadOthers";
import SubLead from "./Parts/SubLead";
import Latest from "./Parts/Latest";
import LatestByCat from "./Parts/LatestByCat";

class SectionOne extends Component {

    render() {
        return (
            <div className="container">


                <div className="row" style={{ height: "auto !important" }}>
                    <div className="col-xl-9 col-12 line-right mt-4">
                        <div className="row">
                            <div className="col-md-8 line-right">
                                <LeadFirst skip={0} take={1} />
                            </div>
                            <div className="col-md-4 mt-4 mt-md-0">
                                <LeadOthers skip={1} take={1} />
                            </div>
                            <div className="col-md-12">
                                <div className="line-bottom mt-4 mb-4"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 line-right">
                                <LeadOthers skip={2} take={1} />
                            </div>
                            <div className="col-md-4 line-right mt-4 mt-md-0">
                                <LeadOthers skip={3} take={1} />
                            </div>
                            <div className="col-md-4 mt-4 mt-md-0">
                                <LeadOthers skip={4} take={1} />
                            </div>
                            <div className="col-md-12">
                                <div className="line-bottom mt-4 mb-4"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="row">
                                    <SubLead skip={0} take={3} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <SubLead skip={3} take={3} />
                                </div>
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
                                            maxHeight: "450px",
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
                                            maxHeight: "450px",
                                            overflowY: "scroll"
                                        }}
                                    >
                                        <LatestByCat
                                            cat={1}
                                            skip={0}
                                            take={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="line-bottom mt-4 mb-4"></div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"></div>
                    </div>

                    <div className="col-md-12">
                        <div
                            className="ad-box"
                            style={{ height: "auto !important" }}
                        >
                            ads
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

export default SectionOne;
