import React, { useState } from 'react'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'

const Header = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="flex justify-between px-16 py-6 shadow-md items-center">
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
  )
}

export default Header