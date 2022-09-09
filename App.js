/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const getUsers = () => {
    fetch("http://localhost:8080/show")
      .then(data => data.json())
      .then(
        (data1) => {
          console.log("DATA", data1);
          setUsers(data1);
        },
        (error) => {
          console.log("ERROR", error);
        }
      )
  }

  const handleChange = (e) => {
    console.log("E-->", e.target.name, e.target.value);
    setUser({...user, [e.target.name]:e.target.value});
    console.log("user", user);
  }

  const handleSave = () => {
    const user_data = JSON.stringify(user);
    const requestOptions = {
      method: 'POST',
      body: user_data
    };

    console.log("requestOptions", requestOptions);

    fetch("http://localhost:8080/insert", requestOptions)
      .then(data => data.json())
      .then(
        (data1) => {
          console.log("SUBMITTED DATA", data1);
          if(data1.affectedRows && data1.insertId)
            setUser(user);
        },
        (error) => {
          console.log("ERROR", error);
        }
      )
  } 

  

  return (
    <div>
      <div>
        <form>
          <input type="hidden" id="id" name="id" value={user.id}  onChange={(e)=>handleChange(e)}/>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value={user.name}  onChange={(e)=>handleChange(e)}/>
          <label for="city">City:</label>
          <input type="text" id="city" name="city" value={user.city}  onChange={(e)=>handleChange(e)}/>
          <label for="state">State:</label>
          <input type="text" id="state" name="state" value={user.state} onChange={(e)=>handleChange(e)}/>
          <input type="button" value="Submit" onClick={()=>handleSave()}/>
        </form>
        <br />
        <input type="button" value="Show" onClick={()=>getUsers()}/>
        </div>
        {users.length ?
          users.map((ele, index) => {
            return (<p key={index} onClick={()=>setUser(ele)}>{ele.id}--{ele.name} -- {ele.city} -- {ele.state}</p>);
          })
          : null}
      </div>
  );
}

export default App;*/
        

/*import { useState } from "react";


  const value= [
      {
        taskId: 1,
        task: "gym",
        completed: true
      },
      {
        taskId: 2,
        task: "buy dinner",
        completed: false
      },
      {
        taskId: 3,
        task: "buy book",
        completed: false
      },
      {
        taskId: 4,
        task: "hello world",
        completed: true
      },
      {
        taskId: 5,
        task: "hiii",
        completed: false
      }
    ]
  
  
export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const changeData = (e) => {
    setInput(e.target.value);
  };

  const change = () => {
    setData([...data, input]);
    setInput("");
  };
  
  return (
    <div>
      {JSON.stringify(value)}
      <input type="text" value={input} onChange={(e) => changeData(e)} />
      <button onClick={change}>Add</button>
      {data.map((data) => (
        <li><button >{data}</button></li>
      ))}
    </div>
  );
}*/



import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
//import {TiEdit} from "react-icons/ti";
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        <div>
          return
        </div>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


