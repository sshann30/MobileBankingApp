import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import accounts from './accounts';
import Contact from './contact';
import Projects from './projects';
import about from './about';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/accounts" component={accounts} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={about} />
  </Switch>
)

export default Main;
