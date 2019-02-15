import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Experiences from './experiences/Experiences';


function App(){
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/experiences' component={Experiences} />
      </Switch>
    </div>
  );
}

export default App;