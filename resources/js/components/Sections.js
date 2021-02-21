import React from "react";
import HeaderSection from "./Sections/HeaderSection";
import MainSections from "./Sections/MainSections";
import MediaSection from "./Sections/MediaSection";

class Navbar extends React.Component {

    render() {

        return (
            <>
                <HeaderSection />
                <MainSections />
                <MediaSection />
            </>
        );
    }
}

export default Navbar;
