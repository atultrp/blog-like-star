import React, { useState } from 'react'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'

const Header = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="flex justify-between px-16 py-6 border-b-2 border-white items-center">
      <h1 className="text-2xl font-semibold tracking-wide uppercase custom-font">
        <Link href={"/"} >Blog Like Star </Link></h1>
      <ul className="flex space-x-16 text-base font-semibold items-center">
        <li className={`${activeTab === 0 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(0)}>
          <Link href={""} >Home</Link>
        </li>
        <li className={`${activeTab === 1 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(1)}>
          <Link href={""} >Blog</Link>
        </li>
        <li className={`${activeTab === 2 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(2)}>
          <Link href={""} >About</Link>
        </li>
        <li className={`${activeTab === 3 ? "opacity-100" : "opacity-70"}`} onClick={() => setActiveTab(3)}>
          <Link href={""} >Contact</Link>
        </li>
      </ul>
      {/* Blog button */}
      <div className="bg-white text-[#1b1b1b] p-2 rounded-full text-xl cursor-pointer">
        <Link href={""} ><FaPenNib /></Link>
      </div>
    </div>
  )
}

export default Header