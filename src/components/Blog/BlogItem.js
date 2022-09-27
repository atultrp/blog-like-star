import React from 'react'
import { VscDebugStackframeDot } from 'react-icons/vsc'

const BlogItem = () => {
  return (
    <div className="my-6">
      {/* User Info */}
      <div className='flex items-center'>
        <img src="/assets/avatar17.png" alt="Avatar" className='w-8 rounded-full bg-white mr-2' />
        <div className='text-sm font-semibold'>Author Name</div>
        <VscDebugStackframeDot />
        <div className='text-xs'>May 24</div>
      </div>
      {/* Blog */}
      <div className='my-3'>
        <div className='text-lg font-semibold my-2'>Title Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, rerum!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, placeat. Provident molestiae reiciendis, in voluptatum vel delectus explicabo harum quisquam incidunt dolores eveniet voluptas sint veritatis modi eligendi dolor quod! Repellendus fugit dignissimos inventore totam sunt debitis corrupti excepturi explicabo deserunt illo. Esse iusto deleniti praesentium! Obcaecati dignissimos voluptatum amet.</div>
      </div>
    </div>
  )
}

export default BlogItem