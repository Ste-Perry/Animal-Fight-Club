import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAnimals } from '../actions'

const App = (props) => {

  useEffect(() => {
    props.dispatch(fetchAnimals())
  })

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Animals!</h1>
        <ul>
          {props.animals.map(animal => (
            <li key={animal.id}>{animal.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(App)

