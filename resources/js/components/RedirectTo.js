import React, { Component } from "react";
import {Redirect } from "react-router-dom";

export default function RedirectTo(props){

    return <Redirect to={'/'+props.match.params.location+'/'+props.match.params.slug} />;

}

