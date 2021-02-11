import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Fight from './Fight'


const App = () => {
  return (
    <>
      <h1 className='title'>Animal Fight Club!!!!!</h1>
       <Router>
         <Route path='/' exact component={Home}/>
         <Route path='/fight' exact component={Fight}/>
       </Router>
      
    </>
  )
}

export default App


