import React from 'react';
import s from './card.module.css';



const Cards = (props) => {
    // let cardsElement = props.coords
    //     .map(element => <Card name={element.name} coords={element.coords} setMarkerPosition={props.setMarkerPosition} />)

    return <div>
        {
            props.coords
                .map(element =>
                    <div className={s.cardWrapper} onClick={() => { props.SetMarkerPosition(element.coords) }}>
                        <h2>{element.name}</h2>
                        <div>Координаты: <div>широта:  {element.coords.lat}</div>
                            <div>долгота: {element.coords.lng}</div></div>

                    </div>)
        }

    </div>
}

export default Cards

