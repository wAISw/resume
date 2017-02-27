import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import About from './components/About'
import Works from './components/Works'
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/works' component={Works}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/blog' component={Blog}/>
    </Route>
    <Route path='*' component={NotFound}/>
  </div>
);
