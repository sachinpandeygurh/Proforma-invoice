import React from 'react'
import logo from '../logo.svg';
import '../App.css'
const Header = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Proforma Invoice</h2>
     
    </header>
  </div>
  )
}

export default Header