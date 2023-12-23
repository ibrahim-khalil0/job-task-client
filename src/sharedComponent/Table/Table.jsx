
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import React, { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function CustomizedTables({task, setTask}) {

  const [showPopup, setShowPopup] = useState(false)

  const [targetId, setTargetId] = useState(null)

  const handleOngoing = () => {

    axios.put(`https://make-task-server.vercel.app/ongoing/${targetId}`)
    .then(res => {
      const remaining = task.filter(item => item._id != targetId)
      setShowPopup(!showPopup)
      setTask(remaining)

    })
  }
  
  
  const handleCompleted = () => {
  
    axios.put(`https://make-task-server.vercel.app/completed/${targetId}`)
    .then(res => {
      console.log(res.data)
      const remaining = task.filter(item => item._id != targetId)
      setShowPopup(!showPopup)
      setTask(remaining)
    })
  }
  const handleDelete = () => {
  
    axios.delete(`https://make-task-server.vercel.app/delete/${targetId}`)
    .then(res => {
      console.log(res.data)
      const remaining = task.filter(item => item._id != targetId)
      setShowPopup(!showPopup)
      setTask(remaining)
    })
  }
  
  
  
 
  const handlePopup = (id) => {
    setTargetId(id)
    setShowPopup(!showPopup)
  }

  return (
    <div>
      <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className='w-16'>Action</StyledTableCell>
            <StyledTableCell align="center">Task Name</StyledTableCell>
            <StyledTableCell align="center">Deadline</StyledTableCell>
            <StyledTableCell align="center">Priority</StyledTableCell>
            <StyledTableCell className='max-w-[200px]'  align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {task.map((task) => (
            <StyledTableRow key={task._id}>
              <StyledTableCell component="th" scope="row"><button onClick={() => handlePopup(task._id)} className='w-5 h-5 border border-black rounded-md'></button></StyledTableCell>
              <StyledTableCell align="center">{task.tittle}</StyledTableCell>
              <StyledTableCell align="center">{task.deadline}</StyledTableCell>
              <StyledTableCell align="center">{task.priority}</StyledTableCell>
              <StyledTableCell className='max-w-[150px]'  align="right">{task.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {
      showPopup ? <div className='absolute bg-[#000000cf] top-0 w-full left-0 h-full grid place-items-center'>
        <div className='w-1/2 bg-white relative rounded-md'>
          <button onClick={handlePopup} className='absolute right-0 top-0 bg-gray-500 text-white px-3'>X</button>
          <div className='py-10'>
            <button onClick={handleOngoing} className='border border-[#FC9401] hover:bg-white hover:text-[#FC9401] text-white px-5 py-2 rounded-md text-xl block w-1/2 mx-auto mt-5 bg-[#FC9401]'>Move To Ongoing</button>
            <button onClick={handleCompleted} className='border border-[#FC9401] hover:bg-white hover:text-[#FC9401] text-white px-5 py-2 rounded-md text-xl block w-1/2 mx-auto mt-5 bg-[#FC9401]'>Move To Completed</button>
            <button onClick={handleDelete} className='border border-[#FC9401] hover:bg-white hover:text-[#FC9401] text-white px-5 py-2 rounded-md text-xl block w-1/2 mx-auto mt-5 bg-[#FC9401]'>Delete</button>
          </div>

          
        </div>
    </div>
    :
    ''
    }
  </div>
  );
}