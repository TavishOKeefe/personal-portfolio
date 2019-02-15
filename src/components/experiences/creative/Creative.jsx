import React from 'react';
import Writing from './writing/Writing';
import Entertainment from './entertainment/Entertainment';

function Creative(){
  return (
    <div>
      <hr/>
        <p>This is where my <strong>Creative</strong> will go</p>
        <Writing/>
        <Entertainment/>
      <hr/>
    </div>
  );
}

export default Creative;