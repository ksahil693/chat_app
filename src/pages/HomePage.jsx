import React from 'react'
import SideBar from '../components/sideBar'
import Chat from "../components/chat"

function HomePage() {
  return (
    <div className="home">
      <div className="container">
          <SideBar/>
          <Chat/>
      </div>
    </div>
  )
}

export default HomePage