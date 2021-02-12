import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Leaderboard = (props) => {

  const sortAnimals = (a, b) => {
    return a.wins - b.wins
  }

  useEffect(() => {
    props.animals.sort(sortAnimals)
  })

  return(
    <>
    <Link to='/fight'>Back</Link>
      <h1> Here is the Winners!!!!</h1>
      <ul>
          {props.animals.map(animal => {
            if(animal.id == animal.id){
              return <li key={animal.id}><Link to={`/profile/${animal.id}`}>{animal.name}</Link> {animal.wins}</li>
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

export default connect(mapStateToProps)(Leaderboard)