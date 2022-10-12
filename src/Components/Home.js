import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { BsSearch } from 'react-icons/bs'
import './Home.css'

function Home() {
  return (
    <>
        <Navbar />
          <div className='home'>
            <Sidebar />
            <div className="homeWrapper">
                <div className="searchBar">
                    <BsSearch size={30} />
                    <input type="text" placeholder="Search for information" />
                </div>
                <div className="container">
                    <div className="item">Medical Condition List</div>
                    <div className="item">Students with Attendance below 75%</div>
                </div>
                <div className="result">
                    <h1>Result : </h1>
                    <div className="resultContainer"></div>
                </div>
            </div>
          </div>
    </>
  )
}

export default Home