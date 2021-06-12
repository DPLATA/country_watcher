import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import THEME_TOGGLER_BUTTON_COMPONENT from './components/theme_toggler_button_component';
import COUNTRIES_LIST_COMPONENT from './components/countries_list_component';
import COUNTRY_DETAIL_COMPONENT from './components/country_detail_component';

function App() {

  const [dark_theme, set_dark_theme] = useState(false)
  
  return (
    <div className={dark_theme ? 'dark_theme' : 'light_theme'}>
      <THEME_TOGGLER_BUTTON_COMPONENT
        dark_theme={dark_theme}
        onClick={() => {set_dark_theme(!dark_theme)}}
        text={`${dark_theme ? 'light' : 'dark'} theme`}
      />

      <Router>
        <Switch>
          <Route path='/:name' component={COUNTRY_DETAIL_COMPONENT} />
          <Route path='/'>
            <COUNTRIES_LIST_COMPONENT className='countries_list'/>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;