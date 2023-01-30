import React from 'react'
import FullBlogPage from '../components/Blog/FullBlogPage'
import blogData from './../data/data.json'
import { useRouter } from 'next/router';

const fullBlog = () => {

  const router = useRouter();
  const blogId = router.query.id

  return (
    <>
      {blogData?.map(blog => {
        if (blog.id == blogId) {
          return <div>
            <FullBlogPage blogData={blog} />
          </div>
        }
      })}
    </>
  )
}

export default fullBlog