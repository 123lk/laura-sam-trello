const React = require('react');
const ReactDOM = require('react-dom');
const Lists = require('./Lists');
const Header = require('./Header');

require('bulma/css/bulma.css');
require('./App.css');
require('font-awesome/css/font-awesome.css');

const App = React.createClass({
    getInitialState: function () {
        return {
            lists: [
                {
                    title: 'list 1',
                    cards: [
                        {text: 'card 1', due: 'tomorrow'},
                        {text: 'card 2', due: 'maybe never'},
                        {text: 'card 3'}
                    ]
                },
                {
                    title: 'list 2',
                    cards: [
                        {text:'list 2 card 1'}
                    ]
                }
            ]
        };
    },
    addList: function (listTitle) {
        this.setState({
           lists: this.state.lists.concat([{title: listTitle, cards: []}])
        });
    },
    removeList: function (listIndex){
        this.state.lists.splice(listIndex,1)
        const lists = this.state.lists;
        this.setState({
            lists: lists
        });
    },
    addCard: function (listIndex, cardText) {
        const lists = this.state.lists.slice();
        lists[listIndex] = Object.assign({}, lists[listIndex]);
        lists[listIndex].cards = lists[listIndex].cards.concat([{text: cardText}]);
        this.setState({
            lists
        });
    },
    removeCard: function (listIndex, cardIndex) {
        const lists = this.state.lists.slice(); 
        lists[listIndex] = Object.assign({}, lists[listIndex]); 
        lists[listIndex].cards.splice(cardIndex, 1);
        this.setState({
            lists
        });
    },
    render: function () {
        return (
            <div className = 'app'>
            <Header/>
            <Lists 
            lists = {this.state.lists}
            addList ={this.addList}
            addCard = {this.addCard}
            removeList = {this.removeList}
            removeCard = {this.removeCard}
            />
            </div>
        );
    }
});





ReactDOM.render(<App/>, document.getElementById('root'));