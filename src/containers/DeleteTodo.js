import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

const DeleteTodo = ({id, dispatch}) => {
  return (
      <div>
        <a onClick={e => {
          e.preventDefault()
          // dispatch(deleteTodo())

          console.log(dispatch(deleteTodo()));
        }}></a>
      </div>
  )
}

export default DeleteTodo