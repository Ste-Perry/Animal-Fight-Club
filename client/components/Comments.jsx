import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../apis/animals'

const CommentForm = (props) => {

  const [comments, setComments] = useState(
    [
      {
        id: null,
        comment: "",
        animal_id: null
      }
    ]
  )
  
  useEffect(()=> {
    fetchComments()
  },[])

  const fetchComments = () => {
    getComments()
    .then(comments => {
      setComments(currentComments => {
        const allComments = []
        comments.map(comment => {
          allComments.push(comment)
          return comment
        })
        currentComments = allComments
        return currentComments
      })
    })
  }

  return (
    <div>
      {comments.map(comment => {
        return (
          <>
            <p>{comment.comment}</p>
          </>
        )
      })}
      
    </div>
  )
}

export default connect()(CommentForm)