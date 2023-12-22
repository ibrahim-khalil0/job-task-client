import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const TaskForm = () => {

  const {user} = useContext(AuthContext)
  const userEmail = user?.email

  const handleTask = e => {
    e.preventDefault()
    const form = e.target
    const tittle = form.title.value
    const description = form.description.value
    const deadline = form.deadline.value
    const priority = form.priority.value

    const task = {tittle, description, deadline, priority, userEmail}



    axios.post('http://localhost:5000/task', task)
    .then(res => {
      console.log(res.data)
    })
  }
  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={handleTask}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter task title"
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Provide a brief description of the task"
          rows="4"
          required
        ></textarea>

        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          required
        />

        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          required
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;