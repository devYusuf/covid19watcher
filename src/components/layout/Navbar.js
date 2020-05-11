import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

  showNav = () => {
    let nav = document.querySelector('.navbar-menu');
    nav.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar poppins card">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" ><b>COVID-19 Watcher</b></Link>
          <Link href="#" className="navbar-burger burger" onClick={this.showNav}>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/news" className="navbar-item">News</Link>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance/infection-prevention-and-control" className="navbar-item">Preventive Measures</a>
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <a href="http://who.int" className="button is-primary is-small">WHO Website</a>
              <a href="http://cdc.gov" className="button is-warning is-small">CDC Website</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
