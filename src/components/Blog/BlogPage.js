import React from 'react'
import BlogItem from './BlogItem'

const BlogPage = () => {
  return (
    <div className="px-16 py-6">
      <h2 className="text-4xl custom-font uppercase">Blogs</h2>
      <div>
        <BlogItem />
      </div>
    </div>
  )
}

export default BlogPage