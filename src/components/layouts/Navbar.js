import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link class="navbar-brand" href="#">
    <img src={logo} alt="logo" style={{width:'35px'}} />
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span>
      <i className="fas fa-bars" style={{ color:'#fff' }} />
    </span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white text-uppercase ml-5" to="/">
          Home&nbsp;<i class="fas fa-home"></i>
        <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white text-uppercase ml-5" to="/news">News</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white text-uppercase ml-5" to="contacts">Contact Us</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}

export default Navbar;