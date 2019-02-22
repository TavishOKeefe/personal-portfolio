import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Experiences from './experiences/Experiences';
import Places from './experiences/personal/Places';
import Hobbies from './experiences/personal/Hobbies';
import Acting from './experiences/creative/entertainment/Acting';
import Modeling from './experiences/creative/entertainment/Modeling';
import Writing from './experiences/creative/writing/Writing';
import Professional from './experiences/professional/Professional';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/experiences' component={Experiences} />
        <Route exact path='/places' component={Places} />
        <Route exact path='/writing' component={Writing} />
        <Route exact path='/acting' component={Acting} />
        <Route exact path='/modeling' component={Modeling} />
        <Route exact path='/hobbies' component={Hobbies} />
        <Route exact path='/professional' component={Professional} />
      </Switch>
    </div>
  );
}

export default App;
