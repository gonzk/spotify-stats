import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./styles/Button.css";
import Auth from "./Auth"

export default function Button(props) {
    return (
        <>
            <li className="btn__item">
                <Link className="btn__item__link" to={props.path}>
                    <button className="btn_container">
                        {props.title}
                    </button>
                </Link>
            </li>
        </>
    );
}