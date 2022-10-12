import React from 'react'
import './Sidebar.css'
import {GiHamburgerMenu} from  'react-icons/gi'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <GiHamburgerMenu style={{padding: "15px"}} size={30} />
        </div>
        <div className="sideContainer">
            <div className="sideItem">Students</div>
            <div className="sideItem">Subjects</div>
            <div className="sideItem">Total Attendance</div>
        </div>
    </div>
  )
}

export default Sidebar