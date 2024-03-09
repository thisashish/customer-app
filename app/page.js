"use client";


import  Sidebar  from './components/Sidebar';
import ShowEmployee from './dashboard/showEmployee/page';


export default function Home() {
  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar role="admin" />
      </div>
      <div className="content">
        <ShowEmployee />
      </div>
    </div>
  )
}
