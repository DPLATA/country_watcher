import React from 'react';


function COUNTRY_DETAIL_COMPONENT (props) {
    
    return <>
        THIS IS {props.match.params.name.toUpperCase()} DETAIL!
    </>
}

export default COUNTRY_DETAIL_COMPONENT;