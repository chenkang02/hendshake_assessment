import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //form data to store the state of the data
  const [formData, setFormData] = useState({
    activity: '',
    price: '',
    type: 'education',
    bookingRequired: false,
    accessibility: 0.5
  });

  //handler to set form data based on user input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  //state of to do list to store submitted to dos, the to dos are stored in the local storage due to the lack of a database and backend server
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // handler to delete to do
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //whenever to dos change, save them to local storage
  useEffect(() => {
    console.log(JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //handle submission 
  const handleSubmit = (e) => {
    try{
      e.preventDefault();
    const newTodo = {
      id: Date.now(),
      ...formData
    };
    console.log(newTodo);
    setTodos(prevTodos => [...prevTodos, newTodo]);

    //reset form data after todos are submitted
    setFormData({
      activity: '',
      price: '',
      type: 'Education',
      bookingRequired: false,
      accessibility: 0.5
    });
    } catch (err){
      console.log(err);
    }
  };

  return (
    <div className="app">
      <h1>Todo List ({todos.length} {todos.length > 1 ? "items" : "item"})</h1>
      <form onSubmit={handleSubmit} className="todo-create-form">
        <div className="form-group">
          <label htmlFor="activity">Activity:</label>
          <input
            type="text"
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Education">Education</option>
            <option value="Recreational">Recreational</option>
            <option value="Social">Social</option>
            <option value="DIY">DIY</option>
            <option value="Charity">Charity</option>
            <option value="Cooking">Cooking</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Music">Music</option>
            <option value="Busywork">Busywork</option>
          </select>
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="bookingRequired"
              checked={formData.bookingRequired}
              onChange={handleChange}
            />
            Booking Required
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="accessibility">
            Accessibility ({formData.accessibility}):
          </label>
          <input
            type="range"
            id="accessibility"
            name="accessibility"
            min="0"
            max="1"
            step="0.1"
            value={formData.accessibility}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Todo</button>
      </form>
      {/* map to dos to a list of to do */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="individual-todo">
            <div className="todo-content">
              <h2>{todo.activity}</h2>
              <p>Price: {todo.price} </p>
              <p>Type: {todo.type}</p>
              <p>Is Booking Required: {todo.bookingRequired ? "Yes" : "No"}</p>
              <p>Accessibility: {todo.accessibility}</p>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
