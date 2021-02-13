import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <SectionOne />
                {/* <SectionTwo /> */}
            </>
        );
    }
}

export default Navbar;
