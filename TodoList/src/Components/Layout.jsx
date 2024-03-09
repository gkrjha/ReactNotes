import React, { useState } from 'react';

const Layout = () => {
 
  let [todotext,settodotext]=useState('');
  let [tododate,settododate]=useState('');
  let [todo,settodo]=useState([]);

  const handeltodo=()=>{
    if(todotext !=='' && tododate !==""){
    settodo([...todo,{todotext,tododate}])
    settododate('')
    settodotext('')
    }
  }


  const removetodo=(index)=>{
    const updatetodo=[...todo];
    updatetodo.splice(index,1)
    settodo(updatetodo)
  }

  const tododone=(index)=>{
    const updatedTodos = [...todo];
    updatedTodos[index].done=true;
    settodo(updatedTodos)
  }


  
  return (
    <>
    <div className='container'>
      <div className='addtodo'>
        <input type="text"  value={todotext} onChange={(e)=>{settodotext(e.target.value)}}/>
        <input type="date" value={tododate} onChange={(e)=>{settododate(e.target.value)}}/>
        <button onClick={handeltodo}>Add</button>
      </div>
      <div>
      {todo.map((todo, index) => (
  <div key={index}  style={{ textDecoration: todo.done ? 'line-through' : 'none' }} className='todo'>
    <span>{todo.todotext} - {todo.tododate}</span>
    <button onClick={() => tododone(index)}>Done</button>
    <button onClick={() => removetodo(index)}>Remove</button>
  </div>
))}
 
      </div>
    </div>
    </>
  );
}

export default Layout;
