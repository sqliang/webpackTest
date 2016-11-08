"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var HelloComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h4>Hello,world.</h4>
            </div>
        )
    }
});
ReactDOM.render(
    <HelloComponent/>,
    document.getElementById('app-root')
);
