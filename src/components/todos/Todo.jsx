import React, { PropTypes } from 'react'

// Todo is a single todo item.s
//
// text: string is the text to show.
// completed: boolean is whether todo should appear crossed out.
// onClick() is a callback to invoke when a todo is clicked.

const Todo = ({ onClick, onDelete, completed, text }) => (

  <li

    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type="checkbox" />
    {text}
    <button
      className="delete"
      onClick={onDelete}
    >
      x
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
