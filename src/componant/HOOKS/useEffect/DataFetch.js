import React, { useEffect, useState } from 'react'

const loadingMessage = <p>todos is loading</p>

const DataFetch = () => {
const[todos, setTodos] = useState(null)
const[isLoading, SetIsLoading] = useState(true)
const[error, setError] = useState(null)

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      if(!res.ok){
        throw Error("Fetching is not successful");
      }else{
        return res.json();
      }
      
    })
    .then((data)=>{
      setTodos(data);
      SetIsLoading(false);
      setError(null);
    })
    .catch((error) =>{
      setError(error.message)
      SetIsLoading(false);
    })
  },[]);

  const todosElement = todos && 
           todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>
    })



  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  )
}

export default DataFetch
