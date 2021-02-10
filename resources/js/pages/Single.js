import React from 'react';
import axios from 'axios';
import { Component } from 'react';


class Single extends Component {

    state = {
        item: []
    };


    componentDidMount() {
        const slug = this.props.match.params.slug;
        axios.get(`/api/news_by_slug/${slug}`).then(res => {
            const item = res.data;
            this.setState({ item });
            console.log(item);
        });
    }

    render() {



        return(
        <>{ 'News Working' }</>
    )
    }
}

export default Single;


// function Xcom ({match})  {


//     axios.get('https://reqres.in/api/users?page=2')
//     .then(response => {
//        console.log(response.data)
//        const { data } = response.data
//        setUserData(data)
//    }).catch(error => {
//        console.log(error);
//    })

//     return(
//         <>{match.params.slug}</>
//     )
// }

// export default Xcom;
