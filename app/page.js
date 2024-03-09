"use client";


import Sidebar from './components/Sidebar';
import ShowEmployee from './dashboard/showEmployee/page';
import { NavBar } from './components/NavBar';
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="sidebar" style={{marginRight:20,}}>
          <Sidebar role="admin"  />
        </div>
        <div className="content">
          <ShowEmployee/>
        </div>
      </div>
    </>
  )
}
