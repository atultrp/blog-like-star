import React, { useEffect, useState } from 'react'
import FullBlogPage from '../components/Blog/FullBlogPage'
// import blogData from './../data/data.json'
import { useRouter } from 'next/router';
import { readBlogData } from '../components/helper/request';

const fullBlog = () => {

  const router = useRouter();
  const blogId = router.query.id

  const [allBlogData, setAllBlogData] = useState([])
  useEffect(() => {
    readBlogData().then((data) => {
      setAllBlogData(data)
    })
  }, [])

  return (
    <>
      {allBlogData?.map(blog => {
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