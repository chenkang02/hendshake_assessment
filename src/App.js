import React, { useState } from 'react';
import './App.css';


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
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="app">
      <h1>Todo List (0 items)</h1>
      
      <form onSubmit={null} className="todo-create-form">
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
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
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
    </div>
  );


}

export default App;
