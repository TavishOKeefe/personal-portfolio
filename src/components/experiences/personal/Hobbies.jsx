import React from 'react';
import books from '../../../../src/assets/images/Books.jpg';
import chess from '../../../../src/assets/images/Chess.jpg';
import guitar from '../../../../src/assets/images/Guitar.jpg';
import snowboard1 from '../../../../src/assets/images/Snowboard1.jpg';

function Hobbies(){
  return (
    <div>
      <img src={guitar}/>
      <img src={snowboard1}/>
      <img src={books}/>
      <img src={chess}/>
    </div>
  );
}

export default Hobbies;
