'use strict';

require('../sass/app.scss');
const React = require('react');
const ReactDom = require('react-dom');
const Classnames = require('classnames');

let Hello = React.createClass({
    render: function () {
        let classname = Classnames('hello hello__centered');
        return (
            <h2 className={classname}>Hello there! Welcome to Hapi & React!!</h2>
        );
    }
});

ReactDom.render(<Hello/>, document.getElementById('hello'));
