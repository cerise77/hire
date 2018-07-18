import _ from 'lodash';

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Pricing from './components/pricing.jsx';
import Services from './components/services.jsx';
import NotFound from './components/notfound.jsx';

/*import LeftNav from './components/leftnav.jsx';
import MenuLeft from './components/menuleft.jsx';*/

//import Flower from './components/flowers.jsx';

import './style.css';
import './animate.css';
import './animations.css';


ReactDOM.render(
    <Router>
        <div>
           <Nav />
            <Switch>
                <Route exact path="/" component={Pricing} />
                <Route path="/services" component={Services} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)
