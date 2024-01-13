import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home'
import Layout from './hocs/Layout'
import Login from './containers/Login'
import Signup from './containers/Signup'
import ListingDetail from './containers/ListingDetail'
import Listings from './containers/Listings'
import Contact from './containers/Contact'
import About from './containers/About'
import NotFound from './components/NotFound'

import './sass/main.scss'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/listings' component={Listings} />
        <Route exact path='/listings/:id' component={ListingDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
  
)

export default App
