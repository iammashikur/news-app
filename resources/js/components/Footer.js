import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                <div className="col-md-12">
                            <div className="line-bottom mt-4 mb-4"></div>
                        </div>

                    <div className="col-md-6 col-sm-12 line-right">
                        <div className="footer-widget">


                            <img className="mb-4"
                                src={
                                    JSON.parse(localStorage.getItem("Settings"))
                                        .logo
                                }
                                style={{ width: "220px" }}
                            />



                            <div className="widget-about">
                                <Link
                                    to="/page/about-us"
                                    className="btn hyper-link"
                                >
                                    <i className="fas fa-newspaper"></i> About
                                    Us
                                </Link>

                                <Link
                                    to="/page/contact-us"
                                    className="btn hyper-link"
                                >
                                    <i className="fas fa-phone"></i> Contact Us
                                </Link>

                                <Link
                                    to="/page/privacy-policy"
                                    className="btn hyper-link"
                                >
                                    <i className="fas fa-key"></i> Privacy
                                    Policy
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-4 d-none d-md-block">
                        <div className="footer-widget text-md-right">
                            <div className="footer-menu footer-menu--1">
                                <ul className="contact-details mb-2">
                                    <li>
                                        <span className="fas fa-pen-nib"></span>{" "}
                                        <a href="/">
                                            সম্পাদক : মুক্তা‌দীর আহমদ মুক্তা
                                        </a>
                                    </li>
                                    <li>
                                        <span className="far fa-address-book"></span>{" "}
                                        <a href="/">
                                            কা‌নিজ প্লাজা, জিন্দাবাজার, সি‌লেট
                                        </a>
                                    </li>
                                    <li>
                                        <span className="fas fa-envelope-open"></span>{" "}
                                        <a href="mailto:info@deshdorpon.com">
                                        info@deshdorpon.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="line-bottom mt-4 mb-4"></div>
                    </div>
                    <div className="col-md-12 mb-2">


                        <div className="row">


                        <div className="col-md-6 col-12">

                            <p className="copyright text-md-left">স্বত্ব © ২০১৪ দেশ দর্পন</p>
                        </div>


                        <div className="col-md-6 col-12">
                            <p className="copyright text-md-right">
                                পোর্টাল বাস্তবায়নে :{" "}
                                <a href={"https://bditfactory.com"} className="text-danger">
                                    বিডি আইটি ফ্যাক্টরী লিঃ
                                </a>
                            </p>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
