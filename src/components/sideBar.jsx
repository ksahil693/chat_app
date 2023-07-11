import React from "react";
import Navbar from "./NavBar"
import Search from "./search"
import Chats from "./chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;