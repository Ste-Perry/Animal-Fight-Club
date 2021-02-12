import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addAnimal } from '../apis/animals'

const CommentForm = (props) => {

  const [formData, setFormData] = useState(
    {
      name: "",
      url: ""
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)

    addAnimal(formData)
  }

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>
        Animal Name : <br></br>
        <input type="text" name="animalName" placeholder="Cheetah" onChange={handleChange}/>
        </label>
        <br></br>
        <label>
        Animal URL picture : <br></br>
        <input type="text" name="url" placeholder="https://www.google.com" onChange={handleChange}/>
        </label>
        <button>Add Animal</button>
      </form>
      
    </div>
  )
}

export default connect()(CommentForm)