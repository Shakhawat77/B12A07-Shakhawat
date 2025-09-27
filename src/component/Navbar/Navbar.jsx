import React from 'react';

const Navbar = () => {
    return (
       
              <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>        
        <li><a>FAQ</a></li>
         <li><a>Changelog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li>
         <button className="btn btn-secondary bg-gradient-to-r from-indigo-700 to-indigo-400 shadow-none border-none">+  New Ticket</button>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl px-20">CS — Ticket System</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end navbar-center hidden lg:flex px-20">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>        
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li>
         <button className="btn btn-secondary bg-gradient-to-r from-indigo-700 to-indigo-400 shadow-none border-none ">+  New Ticket</button>
        </li>
    </ul>
  </div>
</div>
        
    );
};

export default Navbar;