import React from 'react';
import Personal from './personal/Personal';
import Creative from './creative/Creative';
import Professional from './professional/Professional';

function Experiences(){
  return (
    <div>
      <br/>
      <Personal/>
      <br/>
      <Creative/>
      <br/>
      <Professional/>
      <br/>
    </div>
  );
}

export default Experiences;