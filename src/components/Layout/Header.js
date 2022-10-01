import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0)
  // Modal state
  const [modal, setModal] = useState(false);
  const popUpRef = useRef();

  useOnClickOutside(popUpRef, () => {
    setModal(false)
  });

  return (
    <>
      {/* Desktop */}
      <nav className=" justify-between px-16 py-6 shadow-md items-center hidden md:flex bg-white sticky top-0 z-50">
        <Link href={"/"} >
          <h1 className="text-4xl font-semibold tracking-wide uppercase custom-font text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300 cursor-pointer hover:scale-105 duration-200">
            Blog Like Star </h1>
        </Link>
        <ul className="flex space-x-16 text-base font-semibold items-center">
          <Link href={"/"} >
            <li className={`${activeTab === 0 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(0)}>Home</li>
          </Link>
          <Link href={"/blog"} >
            <li className={`${activeTab === 1 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(1)}>Blog</li>
          </Link>
          <Link href={"/"} >
            <li className={`${activeTab === 2 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(2)}>About</li>
          </Link>
          <Link href={"/"} >
            <li className={`${activeTab === 3 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(3)}>Contact</li>
          </Link>
          {/* Blog button */}
          <Link href={"/createBlog"} >
            <div className="bg-rose-500 text-white p-2 rounded-full text-xl cursor-pointer hover:scale-125 ease-in-out duration-200"><FaPenNib /></div>
          </Link>

        </ul>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden py-3 px-4 shadow-md sticky top-0 z-50 items-center bg-white">
        <div className=" flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300">Blog Like Star</h1>
          <HiMenuAlt1 className="text-4xl text-rose-500" onClick={() => { modal ? setModal(false) : setModal(true) }} />
        </div>
        <ul className={`${modal ? 'block' : 'hidden'} absolute right-2 px-4 py-4 shadow-md rounded bg-white font-semibold`} ref={popUpRef}>
          <Link href={"/"} >
            <li className={`${activeTab === 0 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(0)}>Home</li>
          </Link>
          <Link href={"/blog"} >
            <li className={`${activeTab === 1 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(1)}>Blog</li>
          </Link>
          <Link href={"/"} >
            <li className={`${activeTab === 2 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(2)}>About</li>
          </Link>
          <Link href={"/"} >
            <li className={`${activeTab === 3 ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`} onClick={() => setActiveTab(3)}>Contact</li>
          </Link>
        </ul>
        <Link href={"/createBlog"}>
          <div className="bg-rose-500 text-white p-2 rounded-full text-xl cursor-pointer hover:scale-110 ease-in-out duration-200 fixed bottom-2 right-2"><FaPenNib /></div>
        </Link>
      </nav>
    </>
  )
}

export default Header