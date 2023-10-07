import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const currentTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    showToast("Success Delete Todo!", "green");
    setTodos(currentTodo);
  };

  const addTodo = (todo) => {
    if (todo.content !== "") {
      if (todos.filter((curTodo) => curTodo.content === todo.content).length > 0) {
        showToast(`Todo "${todo.content}"  !`, "red");
      } else {
        let currentTodo = [...todos, todo];
        setTodos(currentTodo);
        showToast("New todo added !", "green");
      }
    } else {
      showToast("Empty todo item cannot be added !", "red");
    }
  };

  const showToast = (text, color) => {
    toast(text, {
      className: `rounded ${color} bold-text`,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="parent">
      <div className="todo-app container">
        <p className="title center white-text">Your Todo List</p>
        <AddTodo addTodo={addTodo} initialTodoState={{ id: 0, content: "" }} />

        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
