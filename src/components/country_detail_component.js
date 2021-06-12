import React, { useEffect, useState } from 'react';
import API from '../api';
import './../styles/country_detail_styles.css';


function COUNTRY_DETAIL_COMPONENT (props) {

    const [country_detail, set_country_detail] = useState({})

    useEffect(() => {
        async function fetch_detailed_country_data() {
            const axios_response = await API.get(`name/${props.match.params.name.toLowerCase()}`);
            set_country_detail(axios_response.data[0]);
        }
        fetch_detailed_country_data()
    }, [props.match.params.name]);
  
    return <div className='country_detail_list'>
        <h4>THIS IS {props.match.params.name.toUpperCase()} DETAIL!</h4>
        <div className='field_name'>Name: {country_detail.name}</div>
        <div className='field_name'>Domain: {country_detail.topLevelDomain}</div>
        <div className='field_name'>Capital: {country_detail.capital}</div>
        <div className='field_name'>Region: {country_detail.region}</div>
        <div className='field_name'>Subregion: {country_detail.subregion}</div>
        <div className='field_name'>Population: {country_detail.population}</div>
        <div className='field_name'>Latitude & longitude: {country_detail.latlng}</div>
        <div className='field_name'>Demonym: {country_detail.demonym}</div>
        <div className='field_name'>Timezones: {country_detail.timezones}</div>
        <div className='field_name'>Borders with: {country_detail.borders}</div>
        <div className='field_name'>Native name: {country_detail.nativeName}</div>
    </div>
}

export default COUNTRY_DETAIL_COMPONENT;