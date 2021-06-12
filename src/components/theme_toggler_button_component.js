import React from "react";

function THEME_TOGGLER_BUTTON_COMPONENT (props) {

    // const [value, setValue] = useState(props.show);

    return <>
        <button
            className={props.dark_theme ? 'dark_theme_toggler_dark_theme_active' : 'dark_theme_toggler_light_theme_active'}
            onClick={props.onClick}>
                {props.text}
      </button>
    </>
}

export default THEME_TOGGLER_BUTTON_COMPONENT;