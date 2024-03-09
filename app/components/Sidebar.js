// components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaRegShareFromSquare } from 'react-icons/fa6';

const Sidebar = ({ role }) => {
  const getMenuList = (role) => {
    if (role === 'admin') {
      return [
        { id: 'home', label: 'Home', path: '/dashboard', icon: <IoHome /> },
        { id: 'employee', label: 'Employee', path: '/dashboard/employee', icon: <MdOutlineCalendarToday /> },
        { id: 'rm', label: 'RelationShip-manager', path: '/dashboard/rm', icon: <FaUser /> },
        { id: 'user', label: 'User', path: '/dashboard/user', icon: <FaRegShareFromSquare /> }
      ];
    }
    // Add menu lists for other roles if needed
    return [];
  };

  const menuItems = getMenuList(role);

  return (
    <div className="sidebar bg-gray-800 w-64 h-full p-4">
      {menuItems.map(item => (
        <Link key={item.id} href={item.path}>
          <div className="flex items-center text-white py-2 px-4 hover:bg-gray-700 rounded">
            <div className="mr-2">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
