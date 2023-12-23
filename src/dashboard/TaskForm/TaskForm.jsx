import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TaskForm = () => {

  const {user} = useContext(AuthContext)
  const userEmail = user?.email
  const status = 'new'

  const handleTask = e => {
    e.preventDefault()
    const form = e.target
    const tittle = form.title.value
    const description = form.description.value
    const deadline = form.deadline.value
    const priority = form.priority.value

    const task = {tittle, description, deadline, priority, userEmail, status}



    axios.post('https://make-task-server.vercel.app/task', task)
    .then(res => {
      toast('Task Added')
      form.reset()
    })

  }
  return (
    <div>
      <h1 className='text-2xl text-center mb-8'>Add New Task</h1>
      <form onSubmit={handleTask}>
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <label htmlFor="title">Task Name</label>
            <input className='border border-gray-300 h-10 w-full rounded-md outline-0'
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
              required
            />
          </div>

          <div>
            <label htmlFor="description">Task Description</label>
            <input className='border border-gray-300 h-10 w-full rounded-md outline-0'
              id="description"
              name="description"
              placeholder="Short description"
              type='text'
              required
            ></input>
          </div>


          <div>
            <label htmlFor="deadline">Deadline</label>
            <input className='border w-full border-gray-300 h-10 rounded-md outline-0'
              type="date"
              id="deadline"
              name="deadline"
              required
            />
          </div>


          <div>
            <label htmlFor="priority">Priority</label>
          <select className='border w-full border-gray-300 h-10 rounded-md outline-0'
            id="priority"
            name="priority"
            required
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          </div>
        </div>

        <div className='text-center pt-5'>
          <button className='bg-[#FC9401] px-5 py-2 text-white rounded-md' type="submit">Add Task</button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default TaskForm;