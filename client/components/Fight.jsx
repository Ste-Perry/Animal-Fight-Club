import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getRandomNumber, setWinners} from '../actions/index'


import { fetchAnimals } from '../actions'

const Fight = (props) => {

  useEffect(() => {
    props.dispatch(fetchAnimals())
  }, [])

  
  const fighterA = getRandomNumber()

  let fighterB = getRandomNumber()

  while(fighterA == fighterB){
    fighterB = getRandomNumber()
  }

  console.log(fighterA, fighterB)


  return(
    <>
     <div className='background-img' style={{
          backgroundImage: 'url("/images/background-new.jpg")'
        }}>
        <h1 className='title'>Choose your fighter!</h1>
        <h2 className='title'>Who will win!</h2>
        <div className='link-button'><button><Link to='/'>Home</Link></button></div>
        <br/>
        <br/>
        <div className='link-button'><button><Link to='/leaderboard'>Leaderboard</Link></button></div>
        <div className='animal-column'>
              {props.animals.map(animal => {
                if(animal.id == fighterA || fighterB == animal.id){
                  return  <div className='animal-stuff' key={animal.id}><h2>
                    {animal.name}</h2> 
                    <img className='animal-img' src={`${animal.url}`} alt='animal pic'/><br/>
                    <button onClick={() => {props.dispatch(setWinners(animal))}}> <Link to='/fight'>WINNER!!</Link></button>
                  </div>
              }})}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
}

export default connect(mapStateToProps)(Fight)