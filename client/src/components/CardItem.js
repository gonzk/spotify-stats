import React from 'react';
import "./styles/Cards.css"
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <a className="cards__item__link" href={props.path} target="_blank">
                <figure className="cards__item__pic-wrap">
                    <img src={props.img} alt="Artist" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.artist} <br /> {props.idx}</h5>
                </div>
                </a>
                 
            </li>
        </>
    );
}

export default CardItem;
