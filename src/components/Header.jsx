import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        
        h1 {
          text-align: center;
        }
        
        li {
          margin-left: 25px;
        }
        
        .container {
          margin: 25px;
          text-align: inline;
          position: sticky;
          right: 10%;
          left:10%;
        }

        .topnav {
          border-radius: 25px;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #9bb4dd;
        }

        .topnav li p {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: inline;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        .topnav p:hover {
          border-radius: 25px;
          background-color: #bccbe5;
          color: white;
        }

        .topnav.responsive p {
          float: none;
          display: block;
          text-align: inline;
        }

        ul.topnav li.right {float: right;}

        @media screen and (max-width: 600px) {
          ul.topnav li.right,
          ul.topnav li {float: none;}
        }
        `}</style>
        <h1>&hearts; Tavish OKeefe &hearts;</h1>
      <div className="container">
        <ul className="topnav">
          <p><li className="navbar-brand"><Link to="/experiences">Experiences</Link></li></p>
          <p><li className="navbar-brand"><Link to="/contact">Contact Info</Link></li></p>
          <p><li className="navbar-brand"><Link to="/">Home</Link></li></p>
        </ul>
      </div>
    </div>
  );
}

export default Header;