import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAnimalById } from '../apis/animals'
import { Redirect } from 'react-router-dom'
import Comments from './Comments'
import CommentForm from './CommentForm'



function Profile (props) {
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
      <img className="animalimg"src={animal.url}></img>
      <h2>Comments:</h2>
      {/* <div> */}
      <CommentForm animal={animal}/>
      <Comments />

      {/* </div> */}
      </div>
      
      
    </>
  )
}

export default connect()(Profile)
