import React from "react";
import CrazyLoader from "../components/Sections/CrazyLoader";
import { Helmet } from "react-helmet";



class Home extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                        <title>{JSON.parse(localStorage.getItem("Settings")).title}</title>
                        <meta name="keywords" ontent={JSON.parse(localStorage.getItem("Settings")).tags} />
                        <meta
                            name="description"
                            content={JSON.parse(localStorage.getItem("Settings")).description}
                        />
                        <meta property="og:type" content="article" />
                        <meta
                            property="og:image"
                            content={JSON.parse(localStorage.getItem("Settings")).logo}
                        />
                        <meta
                            property="og:title"
                            content={JSON.parse(localStorage.getItem("Settings")).title}
                        />
                        <meta
                            property="og:description"
                            content={JSON.parse(localStorage.getItem("Settings")).description}
                        />
                    </Helmet>
                <CrazyLoader/>
            </div>
        );
    }
}

export default Home;
