import React, { useEffect, useState } from 'react'
import BlogPage from '../components/Blog/BlogPage'
import { readBlogData } from '../components/helper/request'

const blog = () => {
  const [allBlogData, setAllBlogData] = useState([])

  // Reading data from firebase
  useEffect(() => {
    readBlogData().then((data) => {
      setAllBlogData(data)
    })
  }, [])
  console.log('allBlogData', allBlogData)

  return (
    <>
      <BlogPage data={allBlogData} />
    </>
  )
}

export default blog