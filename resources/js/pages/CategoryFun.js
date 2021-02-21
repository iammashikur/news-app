import React, { Component, useState , useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import CategoryFetch from "../components/CategoryFetch"


function Category(){



    const { slug } = useParams();

    return(<CategoryFetch slug={slug} />);

}

export default Category;
