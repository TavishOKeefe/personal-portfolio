import React from 'react';
import Hobbies from './Hobbies';
import Places from './Places';

function Personal(){
  return (
    <div>
      <hr/>
        <p>This is where my <strong>Personal</strong> will go</p>
        <Hobbies/>
        <Places/>
      <hr/>
    </div>
  );
}

export default Personal;