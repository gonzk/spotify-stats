import React, { useEffect, useState } from 'react';
import "./styles/StatsButton.css";

export default function StatsButton(props) {
    return (
        <>
            <li className="stats__item">
                    <button className="stats_btn" onClick={props.onClick}>
                        {props.title}
                    </button>
            </li>
        </>
    );
}