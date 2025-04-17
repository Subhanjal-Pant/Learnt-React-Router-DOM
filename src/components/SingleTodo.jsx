/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import Button from './Button'

const SingleTodo = ({ todoText, todo, settodos,todos, handleInputChange,todonew, settodo  }) => {
    const [isChecked, setisChecked] = useState(todo.isCompleted)

    // console.log("the value of isChecked is : ", isChecked)
    // console.log("Inside SingleTodo : ", todoText)


    const handleCheckBoxChange = ()=>{
        setisChecked(!isChecked)

    }

    const onEditButtonClick = (e,id)=>{
        console.log("The Edit button is clicked!", id)
        // settodo("Hello fellas")
        let toBeEdited = todos.filter((item)=> item.id ===id)
        // console.log(toBeEdited)
        // console.log(toBeEdited[0])
        settodo(toBeEdited[0].todo)
        const updatedTodos = todos.filter((item)=> item.id !==id);
        settodos(updatedTodos)   
    }   
    const onDeleteButtonClick = (e,id)=>{
        const updatedTodos = todos.filter((item)=> item.id !==id);
        settodos(updatedTodos)        
    }

  return (
    <div className='flex mx-2 my-2 items-center '>
        <div className='flex gap-5 w-1/2 items-center'>
            <input className='my-4 mx-2' type="checkbox"
            checked={isChecked}
            onChange={handleCheckBoxChange}
            />
            <div className={`w-1/2 ${isChecked?'line-through':''}`}>{todoText}</div>
        </div>
        <Button onClick = {(e)=>onEditButtonClick(e,todo.id)} text="Edit" />
        <Button onClick = {(e)=>onDeleteButtonClick(e,todo.id)} text="Delete" />
    </div>
  )
}

export default SingleTodo