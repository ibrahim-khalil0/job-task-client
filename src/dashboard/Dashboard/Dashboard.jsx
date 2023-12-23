import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex flex-col sm:flex-row mt-16 min-h-[300px] border border-[#FC9401] dashboard'>
            <div className='bg-[#FC9401] w-full sm:w-[200px]  flex flex-col p-4 gap-5 text-white'>
                <NavLink to={'/dashboard/list'}>To-do List</NavLink>
                <NavLink to={'/dashboard/ongoing'}>Ongoing</NavLink>
                <NavLink to={'/dashboard/completed'}>Completed</NavLink>
                <NavLink to={'/dashboard/newTask'}>Add New Task</NavLink>

            </div>
            <div className='flex-1 sm:p-4 mt-8 sm:mt-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;