import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getRandomNumber} from '../actions/index'

import { fetchAnimals } from '../actions'

const Home = (props) => {

  useEffect(() => {
    props.dispatch(fetchAnimals())
  })

  return(
    <>
      <h1 className='title'>Choose your fighter</h1>
      <ul>
          {props.animals.map(animal => {
            if(animal.id == animal.id){
              return <li key={animal.id}>{animal.name}</li>
          }})}
      </ul>
      <button><Link to='/fight'>Ready to Fight</Link></button>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}


export default connect(mapStateToProps)(Home)