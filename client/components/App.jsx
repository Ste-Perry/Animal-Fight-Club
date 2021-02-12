import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Fight from './Fight'
import EndScreen from './EndScreen'
import Profile from './Profile'
import { addAnimal } from '../apis/animals'


const App = () => {
  return (
    <div className="backimg">
      <h1 className='title'>Animal Fight Club!!!!!</h1>
       <Router>
         <Route path='/' exact component={Home}/>
         <Route path='/fight' exact component={Fight}/>
         <Route path='/endscreen' exact component={EndScreen}/>
         <Route path='/profile/:id' exact component={Profile} />
         <Route path='/addAnimal' exact component={addAnimal} />
       </Router>
      
    </div>
  )
}

export default connect()(App)


