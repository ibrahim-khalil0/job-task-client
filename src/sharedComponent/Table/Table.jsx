import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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





export default function CustomizedTables({task}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
              <StyledTableCell component="th" scope="row"><button className='w-5 h-5 border border-black rounded-md'></button></StyledTableCell>
              <StyledTableCell align="center">{task.tittle}</StyledTableCell>
              <StyledTableCell align="center">{task.deadline}</StyledTableCell>
              <StyledTableCell align="center">{task.priority}</StyledTableCell>
              <StyledTableCell className='max-w-[150px]'  align="right">{task.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}