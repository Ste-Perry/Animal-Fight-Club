import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../apis/animals'

const CommentForm = (props) => {

  const [formData, setFormData] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    addComment(formData,props.animal.id)
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
        Add your comment! : <br></br>
        <input type="text" name="comment" placeholder="Woooowww" onChange={handleChange}/>
        </label>
        <button>Add Comment</button>
      </form>
      
    </div>
  )
}

export default connect()(CommentForm)
