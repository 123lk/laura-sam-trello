const React = require('react');
const ReactDOM = require('react-dom');

require('bulma/css/bulma.css');
require('./App.css');

const App = React.createClass({
    getInitialState: function () {
        return {
            lists: [
                {title: 'list 1',
                cards: [
                    {text: 'card 1', due: 'tomorrow'},
                    {text: 'card 2', due: 'maybe never'},
                    {text: 'card 3'}
                ]}
            ]
        };
    },
    render: function () {
        return (
            <div>
            <h1>Hello (please work!) </h1>
            </div>
        );
    }
});





ReactDOM.render(<App/>, document.getElementById('root'));