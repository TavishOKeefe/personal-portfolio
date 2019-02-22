import React from 'react';
import oklahoma from '../../../../src/assets/images/Oklahoma.jpg';
import la from '../../../../src/assets/images/LA.jpg';
import nyc from '../../../../src/assets/images/NYC.jpg';
import paris from '../../../../src/assets/images/Paris.jpg';
import portland from '../../../../src/assets/images/Portland.jpg';

function Places(){
  return (
    <div>
      <h3>Life is a journey:</h3>
      <img src={oklahoma}/>
      <img src={la}/>
      <img src={nyc}/>
      <img src={paris}/>
      <img src={portland}/>
    </div>
  );
}

export default Places;
