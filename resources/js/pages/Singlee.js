import React from "react";
import Latest from "../components/Sections/Parts/Latest";
import axios from "axios";
import { useState } from 'react';

const Single = props => {


    const { match } = props;
    let { slug } = match.params;
    var url = slug;

    function data(url){
        axios.get(`/api/news_by_slug/${url}`)
        .then((response) => {
          var data = response;
          return data;
        })
        .catch((error)=>{
            console.log(error);
         });
    }

    const xxx = data(url);




    return (
        <div>
            {console.log(xxx.data)}
            <Latest skip={0} take={20} />
        </div>
    );
};

export default Single;
