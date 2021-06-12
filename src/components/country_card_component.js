import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/country_card_styles.css';

function COUNTRY_CARD_COMPONENT (props) {

    return <>
            <div className='list_element'>
                <img src={props.country.flag} alt={` ${props.country.name} flag`}/>
                <li>{props.country.name}</li>
                <p><Link to={`/${props.country.name}`}>DETAIL</Link></p>
            </div>
    </>
}

export default COUNTRY_CARD_COMPONENT;