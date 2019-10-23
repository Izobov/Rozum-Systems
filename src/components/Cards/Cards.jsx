import React from 'react';
import Card from './Card';


const Cards = (props) => {
    let cardsElement = props.cards
        .map(element => <Card name={element.name} coords={element.coords} />)

    return <div>
        <h2>Минск</h2>
        <div>Координаты</div>

    </div>
}

export default Cards

