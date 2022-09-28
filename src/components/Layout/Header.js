import React, { useState } from 'react'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0)
  // Modal state
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className=" justify-between px-16 py-6 shadow-md items-center hidden md:flex">
        <h1 className="text-4xl font-semibold tracking-wide uppercase custom-font text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300">
          <Link href={"/"} >Blog Like Star </Link></h1>
        <ul className="flex space-x-16 text-base font-semibold items-center">
          <li className={`${activeTab === 0 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(0)}>
            <Link href={"/"} >Home</Link>
          </li>
          <li className={`${activeTab === 1 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(1)}>
            <Link href={"/blog"} >Blog</Link>
          </li>
          <li className={`${activeTab === 2 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(2)}>
            <Link href={""} >About</Link>
          </li>
          <li className={`${activeTab === 3 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(3)}>
            <Link href={""} >Contact</Link>
          </li>
          {/* Blog button */}
          <div className="bg-white text-[#1b1b1b] p-2 rounded-full text-xl cursor-pointer">
            <Link href={"/createBlog"} ><FaPenNib /></Link>
          </div>
        </ul>
      </div>

      <nav className="md:hidden py-3 px-4 shadow-md sticky top-0 z-50 items-center bg-white">
        <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300">Blog Like Star</h1>
          <HiMenuAlt1 className="text-4xl text-rose-500" onClick={() => { modal ? setModal(false) : setModal(true) }} />
        </div>
        <ul className={`${modal ? 'block' : 'hidden'} absolute right-2 px-4 py-4 shadow-md rounded bg-white font-semibold`}>
          <li className={`${activeTab === 0 ? "opacity-100 text-rose-500" : "opacity-70"}`} onClick={() => setActiveTab(0)}>
            <Link href={"/"} >Home</Link>
          </li>
          <li className={`${activeTab === 1 ? "opacity-100 text-rose-500" : "opacity-70"}`} onClick={() => setActiveTab(1)}>
            <Link href={"/"} >Blog</Link>
          </li>
          <li className={`${activeTab === 2 ? "opacity-100 text-rose-500" : "opacity-70"}`} onClick={() => setActiveTab(2)}>
            <Link href={"/"} >About</Link>
          </li>
          <li className={`${activeTab === 3 ? "opacity-100 text-rose-500" : "opacity-70"}`} onClick={() => setActiveTab(3)}>
            <Link href={"/"} >Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header