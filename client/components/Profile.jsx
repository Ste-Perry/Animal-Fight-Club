import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAnimalById } from '../apis/animals'
import { Redirect } from 'react-router-dom'



const Profile = (props) => {
  const [redirect, setRedirect] = useState(false)
  const id = props.match.params.id
  const [animal, setAnimal] = useState(
    {
    id: null,
    name: '',
    url: ''
  }
)
  
  useEffect(() => {
    fetchAnimal()
  },[])

  const fetchAnimal = () => {
      getAnimalById(id)
      .then(animal => {
      setAnimal(animal)
      })
  }
  const handleHome = () => {
    setRedirect(true)
  }

  return (
    <>
     <button className="Home" onClick={handleHome}>Home</button>
     {redirect && (<Redirect to="/" />)}
     <div className='animalProfile'>
      <h2>{animal.name}</h2>
      <img src={animal.url}></img>
      </div>
      
      
    </>
  )
}

export default connect()(Profile)
