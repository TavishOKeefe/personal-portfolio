import React from 'react';
import {Personal} from './Personal';
import {Creative} from './Creative';
import {Professional} from './Professional';

function Experiences(){
  return (
    <div>
      <p>This is where my Experiences will go</p>
      <Personal/>
      <Creative/>
      <Professional/>
    </div>
  );
}

export default Experiences;