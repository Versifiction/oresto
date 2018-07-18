import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Application from './components/Application'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
          <Application />
        </Router>
      </Provider>
    )
  }
}

export default App
