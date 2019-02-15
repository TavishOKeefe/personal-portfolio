import React from 'react';
import Academic from './Academic';
import Resume from './Resume';

function Professional(){
  return (
    <div>
      <hr/>
        <p>This is where my <strong>Professional</strong> will go</p>
        <Academic/>
        <Resume/>
      <hr/>
    </div>
  );
}

export default Professional;