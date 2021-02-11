import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


import { fetchAnimals } from '../actions'

const Fight = (props) => {

  useEffect(() => {
    props.dispatch(fetchAnimals())
  })

  return(
    <>
      <h1 className='title'>Choose your fighter</h1>
      <ul className='animal-list'>
          {props.animals.map(animal => {
            if(animal.id == animal.id){
              return  <li key={animal.id}>{animal.name} <a href={animal.url}><img className='animal-img' src={`${animal.url}`} alt='animal pic'/></a></li>
          }})}
      </ul>
      
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Fight)