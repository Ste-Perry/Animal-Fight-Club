import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getAnimals } from '../apis/animals'


const EndScreen = () => {

  const [redirect, setRedirect] = useState(false)
  const [showWinners, setShowWinners] = useState(false)
  const [showLosers, setShowLosers] = useState(false)
  const [winners, setWinners] = useState(                       
    [
      {
        id: null,
        name: '',
        url: ''
      }
    ]
  )
  const [losers, setLosers] = useState(                       
    [
      {
        id: null,
        name: '',
        url: ''
      }
    ]
  )
  useEffect(() => {
    fetchAnimals()
  },[])

  const fetchAnimals = () => {
    getAnimals()
    .then(animals => {
      setWinners(currentWinners => {
        const allAnimals = []
        animals.map(animal => {
          allAnimals.push(animal)
          return animal
        })
        currentWinners = allAnimals
        return currentWinners
      })
    })
  }

  const handleWinners = () => {
    // setWinners(getAnimals)
    setShowWinners(!showWinners)
  }

  const handleLosers = () => {
    setShowLosers(!showLosers)
  }

  const handleHome = () => {
    setRedirect(true)
  }



  
  return (
    <>
        <button className="Winner" onClick={handleWinners}>Winners</button>
        <button className="loser" onClick={handleLosers}>Losers</button>
        <button className="Home" onClick={handleHome}>Home</button>
        {redirect && (<Redirect to="/" />)}
        {showWinners && winners.map(animal => {
          const url = '/profile/' + animal.id
          // console.log(url)
          return (
            <ul>
              <li key={animal.id}><Link to ={url}>{animal.name}</Link></li>
            </ul>
          )
        })}
      
    </>
  )
}

export default connect() (EndScreen)