import React from 'react';


const Card = (props) => {

    return <div>
        <h2>{props.name}</h2>
        <div>Координаты: <span>широта:{props.coords.lat}</span>
            <span>долгота: {props.coords.lng}</span></div>

    </div>
}

export default Card;
