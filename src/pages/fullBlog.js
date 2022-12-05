import React from 'react'
import FullBlogPage from '../components/Blog/FullBlogPage'
import jsonBlogData from './../json/data.json'
import { useRouter } from 'next/router';

const fullBlog = () => {

  const router = useRouter();
  const id = router.query.id

  return (
    <>
      {jsonBlogData?.map(blog => {
        console.log("id", blog.id)
        if (blog.id == id) {
          return <div>
            <FullBlogPage blogData={blog} />
          </div>
        }
      })}
    </>
  )
}

export default fullBlog