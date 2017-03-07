const React = require('react');
const Cards = require('./Cards');

const Lists = React.createClass({
    getInitialState: function () {
        return {
            listName: '',
            cardName: ''
        };
    },
    render: function () {
        return (
            <div className='columns lists'>
                {this.props.lists.map((list, i) => {
                    return (
                        <List 
                        key={i} 
                        id={i} 
                        title={list.title} 
                        cards={list.cards} 
                        addCard={this.props.addCard} 
                        removeList={this.props.removeList}
                        removeCard={this.props.removeCard} 
                        /> 
                    )
                    }
                )}      
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    className = 'list-submit' 
                    value={this.state.listName} 
                    onChange = {this.handleChange} 
                    placeholder='Add a list...'/>
                    <input type="submit" />
                </form>

            </div>
        );
    },
    handleChange: function (event) {
        this.setState({
            listName: event.target.value
        });
    },
    handleSubmit: function (event) {
        event.preventDefault();
        this.setState({
            listName: ''
        });
        this.props.addList(this.state.listName);
    }
});

const List = React.createClass({
        getInitialState () {
            return {
                cardName: ''
            };
        },
        render: function () {
             return (
            <div className='column list'>
                        <h1 className='list-name'>{this.props.title}</h1>
                        <Cards 
                        cards={this.props.cards}
                        listIndex={this.props.id}
                        removeCard={this.props.removeCard}
                        />
                        <form onSubmit = {this.handleCardSubmit}>
                            <input type="text" className ='card-submit'value={this.state.cardName} onChange = {this.handleCardChange} placeholder = 'Add a card...'/>
                            <input type="submit" />
                      </form>
                      <button 
                        onClick = {this.props.removeList.bind(null, this.props.id)}>
                        <i className='fa fa-trash' />
                        </button>
                    </div>
                    );
    },
    handleCardChange: function (event) {
        this.setState({
            cardName: event.target.value
        });
    },
    handleCardSubmit: function (event) {
        this.props.addCard(this.props.id, this.state.cardName);
        this.setState({
            cardName: ''
        });
        event.preventDefault();
    },
    handleRemoveList: function (event) {
        this.props.removeList(this.props.id);
        
    }
});


module.exports = Lists;