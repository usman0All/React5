import React from 'react'
import Hoc from './Hoc';
const ToDo=({data})=>{
    let renderTodos=data.slice(0,10).map((todo)=>{
        return(
        <div key={todo.userId}>
        <p>
        <strong>{todo.title}</strong>
        </p>
        </div>
        )
    })
   // console.log(renderUser);
   return (
    <>
    <div>{renderTodos}</div>
    </>
  )
}
const SearchTodos= Hoc(ToDo,"todos")
export default SearchTodos