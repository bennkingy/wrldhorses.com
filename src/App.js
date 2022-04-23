import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import SigninPage from './pages/SigninPage'

function App() {

  const [walletAddress, setWalletAddress] = useState("");

  function getWallet(wallet) {
    setWalletAddress(wallet);
  }

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact setWallet={() => getWallet()}/>
      </Switch>
    </Router>
  )
}

export default App