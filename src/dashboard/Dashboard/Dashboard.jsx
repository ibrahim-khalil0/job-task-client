import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex mt-16 min-h-[300px] border border-[#FC9401] dashboard'>
            <div className='bg-[#FC9401] w-[200px]  flex flex-col p-4 gap-5 text-white'>
                <NavLink to={'/dashboard/list'}>To-do List</NavLink>
                <NavLink to={'/dashboard/ongoing'}>Ongoing</NavLink>
                <NavLink to={'/dashboard/completed'}>Completed</NavLink>
                <NavLink to={'/dashboard/newTask'}>Add New Task</NavLink>

            </div>
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;