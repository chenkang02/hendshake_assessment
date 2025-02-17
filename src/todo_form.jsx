import React, { memo } from "react";
import "./App.css";

//memoized to do form by using react memo, this component will only render when the props changes,
//and not every time its parent component render
const TodoForm = memo(({ onSubmit, formData, onChange }) => (
  <form onSubmit={onSubmit} className="todo-create-form">
    <div className="form-group">
      <label htmlFor="activity">Activity:</label>
      <input
        type="text"
        id="activity"
        name="activity"
        value={formData.activity}
        onChange={onChange}
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
        onChange={onChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="type">Type:</label>
      <select id="type" name="type" value={formData.type} onChange={onChange}>
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
          onChange={onChange}
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
        onChange={onChange}
      />
    </div>

    <button type="submit">Add Todo</button>
  </form>
));

export default TodoForm;
