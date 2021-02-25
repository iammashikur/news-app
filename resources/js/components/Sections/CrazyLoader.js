import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactDOM from "react-dom";
import CrazyComponent from "./CrazyComponent";

const style = {
    background: "#f4f4f4",
    height: "100vh",
    margin: 6,
    padding: 8,
    borderRadius: 10
};

class Crazyloader extends React.Component {

    state = { data: [], section: 1, items: 13, hasMore: true };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        if (this.state.section <= this.state.items) {
            let res = [
                {
                    id: this.state.section
                }
            ];

            this.setState({
                //updating data
                data: [...this.state.data, ...[{ id: this.state.section }]],
                //updating page numbers
                section: this.state.section + 1
            });

            if (this.state.section > this.state.items) {
                this.setState({
                    hasMore: false
                });
            }
        }
    };

    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.data.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
            >
                {this.state.data.map(section => (
                    <CrazyComponent
                        style={style}
                        key={section.id}
                        element={section.id}
                        total={this.state.items}
                    />
                ))}
            </InfiniteScroll>
        );
    }
}

export default Crazyloader;
