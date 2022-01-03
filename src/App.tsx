import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Buyflow } from './buyflow'
import { ProductIds } from './types'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route path="/buy/:productId">
            <Buyflow />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <Link className="App-link" to={`/buy/${ProductIds.devIns}`}>
              Get started (Developer)!
            </Link>
            <Link className="App-link" to={`/buy/${ProductIds.designerIns}`}>
              Get started (Designer)!
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
