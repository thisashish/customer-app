import React from 'react';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from "react"
const Sidebar = ({ role }) => {
  const getMenuList = (role) => {
    if (role === 'admin') {
      return [
        { id: 'home', label: 'Home', path: '/dashboard', icon: <IoHome />, sub: true, options: [{ id: 1, label: "hello", },{ id: 2, label: "hello", }], iconClosed: <FaAngleDown  onClick={() => setStateTool(prevState => !prevState)}/>, iconOpened: <FaAngleUp  onClick={() => setStateTool(prevState => !prevState)}/>, },
        { id: 'employee', label: 'Employee', path: '/dashboard/employee', icon: <MdOutlineCalendarToday /> },
        { id: 'rm', label: 'RelationShip-manager', path: '/dashboard/rm', icon: <FaUser   onClick={() => setStateTool(prevState => !prevState)} />, sub: true, options: [{ id: 2, label: "hello", },{ id: 3, label: "hello", },], iconClosed: <FaAngleDown  onClick={() => setStateTool(prevState => !prevState)}/>, iconOpened: <FaAngleUp  onClick={() => setStateTool(prevState => !prevState)}/> },
        { id: 'user', label: 'User', path: '/dashboard/user', icon: <FaRegShareFromSquare /> }
      ];
    }
    // Add menu lists for other roles if needed
    return [];
  };

  const menuItems = getMenuList(role);
  // submenu items for siddebar
  const [stateTool, setStateTool] = useState(false);
  return (
    <div className="sidebar bg-white w-64 p-4" style={{ height: "100vh", boxShadow: "rgb(225, 225, 225) 7px 13px 9px 3px" }}>
      {menuItems.map(item => (
        <>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div className="mr-2" style={{ fontSize: 20, color: "#4f4d4d" }}>{item.icon}</div>
            <div className="flex items-center  py-2 px-4 my-4 w-full  " style={{ cursor: "pointer", borderRadius: 20, justifyContent: "space-between", flexDirection: "row" }}>
              <span style={{ fontWeight: "900", color: "#000", fontSize: 16, width: "100%" }} className='w-full'>{item.label}</span>
              {/* {
                item.sub === true && (
                  stateTool === false ? (
                    <FaAngleDown onClick={() => { setStateTool(prevState => !prevState) }} />
                  ) : (
                    <FaAngleUp onClick={() => { setStateTool(prevState => !prevState) }} />
                  )
                )
              } */}
              {/* {
                item.sub === true && <FaAngleDown onClick={() => { setStateTool(prevState => !prevState) }} />
              } */}
              <span>
              {
                item.options && stateTool ? item.iconOpened : item.options ? item.iconClosed : null
              }
              </span>
            </div>
          </div>
          {
            stateTool && item.options?.map((item, index) => (
              <div key={index} className="flex items-center  py-2 px-4 my-2 bg-[#007bce]  " style={{ borderRadius: 10 }}>
                <span style={{ fontWeight: "900", color: "#fff", fontSize: 16, width: "100%" }} className='w-full' >{item.label}</span>
              </div>
            ))
          }
        </>
      ))}

    </div>
  );
};

export default Sidebar;
