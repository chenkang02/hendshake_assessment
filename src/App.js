import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import TodoForm from "./todo_form";
import TodoItem from "./individual_todo";

function App() {
  //form data to store the state of the data
  const [formData, setFormData] = useState({
    activity: "",
    price: "",
    type: "Education",
    bookingRequired: false,
    accessibility: 0.5,
  });

  //handler to set form data based on user input, cached with useCallBack hook to improve performance
  //empty dependency array meant that this function never need to be recreated
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  //state of to do list to store submitted to dos, the to dos are stored in the local storage due to the lack of a database and backend server
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // handler to delete to do, cached with useCallBack hook to improve performance
  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  //whenever to dos change, save them to local storage
  useEffect(() => {
    console.log(JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //handle submission, cached with useCallBack hook to improve performance
  //form data as dependency array as the function requires the latest form data 
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newTodo = {
        id: Date.now(),
        ...formData,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setFormData({
        activity: "",
        price: "",
        type: "Education",
        bookingRequired: false,
        accessibility: 0.5,
      });
    },
    [formData]
  );

  return (
    <div className="app">
      <h1>
        Todo List ({todos.length} {todos.length > 1 ? "items" : "item"})
      </h1>
      <TodoForm
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
      />
      {/* map to dos to a list of to do */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="individual-todo">
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
