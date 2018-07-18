/*import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';*/

var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var AppView = require("./appview.jsx");

var store = redux.createStore(reducer);


store.dispatch({
  type: "SET_STATE",
  state: {
    datas: ["17/07/2018, 100000, Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur", "15/07/2018, 100000, Quis autem vel molestiae consequatur" ]
  }
});



class Services extends React.Component{
    render(){
        return <div className="services">

        <Provider store={store}>
        <AppView />
        </Provider>


        </div>;
    }
}
module.exports = Services;
