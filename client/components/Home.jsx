import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


import { fetchAnimals } from '../actions'

const Home = (props) => {

  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])

  return(
    
    <>
    <div className='title'>
      <h1> Are you Ready to fight!!</h1>
      
      <button className=''><Link to='/fight'>Ready to Fight</Link></button>
      
    </div>
    <div className='animal-home-pic'>
      <img src='/images/homepage.jpg'/>
  </div>
    </>
    
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}


export default connect(mapStateToProps)(Home)