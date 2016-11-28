"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var css = require("./style.css");

var HelloComponent = React.createClass({
    render: function () {
        return (
            <div style={{width:'30px'}}>
                <h4>Hello,{this.props.name}.</h4>
            </div>
        )
    }
});

var name = 'sqliang';
ReactDOM.render(
    <HelloComponent name={name}/>,
    document.getElementById('app-root')
);
