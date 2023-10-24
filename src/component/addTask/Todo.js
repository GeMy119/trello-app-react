import React from 'react'


export const Todo = ({ key, title, status, des, deadline, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <div>
        <p className={`${status == "done" ? "completed" : "incompleted"}`} onClick={() => toggleComplete(key)}>title: {title}</p>
        <p className={`${status == "done" ? "completed" : "incompleted"}`} onClick={() => toggleComplete(key)}>Description: {des}</p>
        <p className={`${status == "done" ? "completed" : "incompleted"}`} onClick={() => toggleComplete(key)}>Dead Line: {deadline}</p>
        <p className={`${status == "done" ? "completed" : "incompleted"}`} onClick={() => toggleComplete(key)}>Status: {status}</p>
        <div>
          <i className="fa fa-pen-to-square edit-icon" onClick={() => editTodo(key)} ></i>
          <i className="fa fa-trash delete-icon" onClick={() => deleteTodo(key)} ></i>
        </div>
      </div>

    </div>
  )
}