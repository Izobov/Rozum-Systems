import React from 'react';
import s from "./card.module.css"

const Card = (props) => {

    return <div className={s.cardWrapper}>
        <h2>{props.name}</h2>
        <div>Координаты: <div className>широта:  {props.coords.lat}</div>
            <div>долгота: {props.coords.lng}</div></div>

    </div>
}

export default Card;
