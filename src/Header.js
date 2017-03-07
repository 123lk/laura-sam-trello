const React = require('react');

const Header = React.createClass({
    render: function () {
        return (
            <div className='header-div' ><h1 className = 'header'>Sam and Laura Trello</h1></div>
        );
    }
});

module.exports = Header;