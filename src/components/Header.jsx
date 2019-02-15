import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px solid #000;
        },
        h1 {
          text-align: center;
        }
        `}</style>
      <h1>&hearts; Tavish OKeefe &hearts;</h1>
      <text><Link to="/experiences">Experiences</Link></text><text><Link to="/contact">Contact Info</Link></text>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;