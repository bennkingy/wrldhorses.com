import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import SigninPage from './pages/SigninPage'

function App() {

  // MAKE SURE WALLET ID IS AVAILABLE HERE

  return (
    <Router>
      <Switch>
       {/* // PASS WALLET ID DOWN TO OTHER COMPONENTS */}
        <Route path='/' component={Home} exact/>
      </Switch>
    </Router>
  )
}

export default App