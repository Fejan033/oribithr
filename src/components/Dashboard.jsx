import React from 'react'
import EmpProfile from '../dashboardcards/EmpProfile'
import TaskList from '../dashboardcards/Taskboard'

const Dashboard = () => {
  return (
    <div>
        <div className='flex flex-col w-86 gap-2'>
            <EmpProfile/>
            <TaskList/>
        </div>
        
    </div>
  )
}

export default Dashboard