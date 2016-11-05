import React, { PropTypes } from 'react'
import Editable from './Editable'

// Todo is a single todo item.s
//
// text: string is the text to show.
// completed: boolean is whether todo should appear crossed out.
// onClick() is a callback to invoke when a todo is clicked.

const Todo = ({ onEditActivate, onToggle, onDelete, onEdit, completed, editing, text,id }) => (

  <li
    onClick={onEditActivate}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input
      type="checkbox"
      className="todo__checkbox"
      defaultChecked={completed}
      onClick={onToggle}
    />

    <Editable
      editing={editing}
      onEdit={onEdit}
      text={text}
      id={id}
    />

    <button
      className="todo__delete"
      onClick={onDelete}
    >
      x
    </button>
  </li>
)

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
