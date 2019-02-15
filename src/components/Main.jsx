import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div>
    <style jsx>{`
      div {
        border: 1px solid #000;
        text-align: center;
      },
      `}</style>
      <text><Link to="/experiences">Experiences</Link></text><text><Link to="/contact">Contact Info</Link></text>
    </div>
  );
}
export default Main;