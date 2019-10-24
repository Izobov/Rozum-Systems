import React from 'react';
import Card from './card/Card';



const Cards = (props) => {
    let cardsElement = props.coords
        .map(element => <Card name={element.name} coords={element.coords} />)

    return <div>
        {cardsElement}

    </div>
}

export default Cards

