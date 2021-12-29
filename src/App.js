import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {

    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //useEffect
    useEffect(() => {
       filterHandler();
    }, [todos, status]); 

    //Functions 
    const filterHandler = () => {
        switch(status) {
            case "completed":
              setFilteredTodos(todos.filter((todo) => todo.completed === true));
              break;
            case "uncompleted":
              setFilteredTodos(todos.filter((todo) => todo.completed === false));
              break;
            default:
                setFilteredTodos(todos);
              break; 
        }
    };

    //Save to Local
    const saveLocalTodos = () => {
         localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") ==null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
           let todoLocal = JSON.pars(localStorage.getItem("todos"));
           setTodos(todoLocal);
        }
    };
    

  return (
    <div className="App">
      <header>
      <h1>Mel's Todo List</h1>
    </header>
    <Form 
    todos={todos} 
    setTodos={setTodos} 
    inputText={inputText} 
    setInputText={setInputText} 
    setStatus={setStatus}
    />
    <TodoList 
    filteredTodos={filteredTodos} 
    setTodos={setTodos} 
    todos={todos} />
    </div>
  );
}
 
export default App;