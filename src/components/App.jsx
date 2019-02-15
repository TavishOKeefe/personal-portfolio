import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Experiences from './Experiences';


function App(){
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;