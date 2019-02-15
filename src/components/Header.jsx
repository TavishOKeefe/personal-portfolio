import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        .container {
          margin: 25px;
          text-align: center;
          position: sticky;
          right: 10%;
          left:10%;
        }

        .topnav {
          border-radius: 25px;
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
        }

        .topnav li a {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        .topnav a:hover {
          border-radius: 25px;
          background-color: #07051a;
          color: white;
        }

        .active {
          background-color: #4CAF50;
          color: white;
        }

        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
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
          <li className="navbar-brand"><Link to="/experiences">Experiences</Link></li>
          <li className="navbar-brand"><Link to="/contact">Contact Info</Link></li>
          <li className="navbar-brand"><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;