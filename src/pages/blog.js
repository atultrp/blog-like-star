import React, { useEffect, useState } from 'react'
import BlogPage from '../components/Blog/BlogPage'
import { readBlogData } from '../components/helper/request'
import { sortBlogData } from '../components/helper/utils'

const blog = () => {
  const [allBlogData, setAllBlogData] = useState([])

  // Reading data from firebase
  useEffect(() => {
    readBlogData().then((data) => {
      setAllBlogData(sortBlogData(data))
    })
  }, [])

  return (
    <>
      <BlogPage data={allBlogData} />
    </>
  )
}

export default blog