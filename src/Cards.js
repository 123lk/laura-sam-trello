const React = require('react');

const Cards = React.createClass({
    
    render: function () {
        return (
            <div className = 'cards'>
                {this.props.cards.map(function(card,i){
                    return (
                        <Card 
                        key={i} 
                        cardIndex={i}
                        text={card.text} 
                        due={card.due}
                        removeCard={this.props.removeCard}
                        listIndex={this.props.listIndex}
                        />
                    
                    )
                    
                }.bind(this))}
                
            </div>
        )

    }
})

const Card = React.createClass({
    render: function () {
        return (
            <div className = 'cardBox'>
                <span>{this.props.text}</span>
                      <button 
                        onClick = {this.props.removeCard.bind(null, this.props.listIndex, this.props.cardIndex)}>
                        <i className='fa fa-trash fa-2x' />
                        </button>
                 </div>
        );

    }
})

module.exports = Cards;
