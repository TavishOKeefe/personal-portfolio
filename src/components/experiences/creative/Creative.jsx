import React from 'react';
import Writing from './Writing';
import Entertainment from './Entertainment';

function Creative(){
  return (
    <div>
      <hr/>
        <p>This is where my Creative will go</p>
        <Writing/>
        <Entertainment/>
      <hr/>
    </div>
  );
}

export default Creative;