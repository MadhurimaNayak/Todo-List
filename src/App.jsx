import {useState,useEffect} from "react"
import Todoheading from "./components/Todoheading"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() {

  const[todos,setTodos]=useState([])
  const[todoValue,setTodovalue]=useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddtodos(newtodo){
    const newTodolist=[...todos,newtodo]
    persistData(newTodolist)
    setTodos(newTodolist)
  }

  function handleDeletetodo(index){
    const newTodolist=todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodolist)
    setTodos(newTodolist)
  }

  function handleEdittodo(index){
    const valueToedit=todos[index]
    setTodovalue(valueToedit)
    handleDeletetodo(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
    <Todoheading/>
    <Todoinput todoValue={todoValue} setTodovalue={setTodovalue} handleAddtodos={handleAddtodos}/>
    <Todolist handleEdittodo={handleEdittodo} handleDeletetodo={handleDeletetodo} todos={todos}/>
    </>
  )
}

export default App
