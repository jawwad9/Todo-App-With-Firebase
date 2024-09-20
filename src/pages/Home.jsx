
import React, { useRef, useState } from 'react'


const Home = () => {
  const todo = useRef();
  let [todoRender , setTodos] = useState([]);
   
  const addTodo = (event) => {
    event.preventDefault();
    todoRender.push(todo.current.value)
    setTodos([...todoRender])
    todo.current.value = ''
  } 
  const deleteTodo = (index)=>{
    console.log("delete" , index);
    todoRender.splice(index , 1)
    setTodos([...todoRender])
  }
  
  const editTodo = (index)=>{
    console.log("edit" , index);
    const editVal = prompt("Enter Todo");
    todoRender.splice(index , 1 , editVal)
    setTodos([...todoRender])
    
}


  return (
    <>
      <div className='text-center'>
        <h1 className='text-4xl mt-5'>Todo App</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Enter Todo"
            className="mt-5 input input-bordered w-[20rem] m-7"
            ref={todo}/>
          <button className="btn btn-info">Add Todo</button>
        </form>
      </div>
      {todoRender.map((item, index) => (
        <div key={index} className='text-center flex justify-center gap-5 mt-3'>
          <li>{item}</li> 
          <button onClick={()=> editTodo(index)} className="btn btn-success ">Edit</button>
          <button onClick={()=> deleteTodo(index)} className="btn btn-error">Delete</button>
        </div>
      ))} 
    </>
  )
}

export default Home