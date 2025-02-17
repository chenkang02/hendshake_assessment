import React, { memo } from "react";
import "./App.css";

//memoized to do item by using memo, this component will only render when the props changes,
//and not every time its parent component renders
const TodoItem = memo(({ todo, onDelete }) => (
  <div className="todo-content">
    <h2>{todo.activity}</h2>
    <p>Price: {todo.price} </p>
    <p>Type: {todo.type}</p>
    <p>Is Booking Required: {todo.bookingRequired ? "Yes" : "No"}</p>
    <p>Accessibility: {todo.accessibility}</p>
    <button className="delete-button" onClick={() => onDelete(todo.id)}>
      Delete
    </button>
  </div>
));

export default TodoItem;
