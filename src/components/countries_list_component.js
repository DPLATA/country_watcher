import React, { useEffect, useState } from 'react';
import COUNTRY_CARD_COMPONENT from './country_card_component';
import './../styles/countries_list_styles.css';
import API from '../api';


function COUNTRIES_LIST_COMPONENT (props) {
    const [countries_list, set_countries_list] = useState([])

    useEffect(() => {
        async function fetch_countries_data() {
            const axios_response = await API.get('all');
            set_countries_list(axios_response.data);
        }
        fetch_countries_data()
    }, []);

    return <>
        <ul>

            { countries_list.map( country =>
                    <COUNTRY_CARD_COMPONENT key={country.alpha3Code} className='list_element' country={country}/>
            )} 

        </ul>
    </>
}

export default COUNTRIES_LIST_COMPONENT;