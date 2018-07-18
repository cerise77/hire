import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return <div className="sticky">
            <label for="menu-trigger" className="img">

            </label>

            <input type="checkbox" id="menu-trigger" />

            <ul>
              <li><Link to="/" className="name">Pricing</Link></li>
              <li><Link to="/services" className="name">Bank Connect</Link></li>
            </ul>
          </div>;
    }
}
module.exports = Nav;


//<i class="fa fa-bars" aria-hidden="true"></i>
//<img src="./img/menu.png" alt="" />
